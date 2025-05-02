import React from 'react';

interface GrantProps {
  id: string;
  Status: string;
  'Funding (ETH)': number;
  'Team ': string[];
  'Product/Outcome': string;
  Date: string;
  Category: string[];
  Name: string;
  ETH: string;
}

interface Grants {
  grants: GrantProps[];
}

const Table = ({ grants }: Grants) => {
  return (
    <div>
      <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 w-1/2"
              >
                Cause
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Category
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell w-1/5"
              >
                Amount
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:hidden"
              >
                Amount
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-white">
            {grants &&
              grants.map(grant => (
                <tr key={grant.id}>
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                    {grant.Name || '-'}
                    {/* mobile */}
                    <dl className="font-normal lg:hidden">
                      <dt className="sr-only">Title</dt>
                      <dd className="mt-1 truncate text-gray-700"></dd>
                      <dt className="sr-only sm:hidden">Email</dt>
                      {grant.Category?.join(', ')}
                    </dl>
                  </td>

                  <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                    {grant.Category?.join(', ') || '-'}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500">
                    Ξ {grant.ETH}{' '}
                    {grant['USD value'] ? `($${Number(grant['USD value']).toLocaleString()})` : ''}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
