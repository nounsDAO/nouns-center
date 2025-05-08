'use server';
import { Resource, ResourceArticle } from '@tina/types';
import client from '@tina/client';
import { produce } from 'immer';

export type CategoriesWithResources = Awaited<ReturnType<typeof getCategoriesAndResources>>;

type ExtendedResourceArticle = ResourceArticle & { link?: string };
type ResourceWithLink = Resource & { link?: string };

export const getCategoriesAndResources = async () => {
    const categories = (await client.queries.categoryConnection({ sort: "precedence" })).data.categoryConnection.edges;
    if (!categories) {
        throw new Error('No categories found');
    }
    const resources = (await client.queries.resourceConnection()).data.resourceConnection.edges;

    if (!resources) {
        throw new Error('No resources found');
    }

    return categories.map(category => {
        return {
            ...category?.node,
            resources: resources
                .filter(resource => resource!.node!.category!.id === category!.node!.id)
                .map(resource => produce(resource!.node, draft => {
                    if (draft!.__typename === 'ResourceArticle') {
                        (draft as ExtendedResourceArticle).link = `/p/${draft!.slug}`;
                    }
                }) as ResourceWithLink),
        };
    });
};
