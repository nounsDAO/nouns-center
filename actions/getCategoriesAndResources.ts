'use server';
import client from '@tina/client';

export type CategoriesWithResources = Awaited<ReturnType<typeof getCategoriesAndResources>>;

export const getCategoriesAndResources = async () => {
    const categories = (await client.queries.categoryConnection()).data.categoryConnection.edges;
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
                .map(resource => resource!.node),
        };
    });
};
