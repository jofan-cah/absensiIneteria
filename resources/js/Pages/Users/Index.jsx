import { usePage } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function UserIndex({ auth, users }) {
  const { flash } = usePage().props;
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (flash.success) {
      setShowAlert(true);
    }
  }, [flash.success]);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>}
    >
      <Head title="Users" />



      <div className="py-3">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg rounded-md">
            <div className="p-6 flex justify-between items-center text-gray-900">
              <label className='font-bold'>Total Data : {users.total}</label>
              <Link
                href={route('users.create')}
                className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              >
                Create User
              </Link>
            </div>
            {showAlert && (
              <div id="alert-1" className="flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div className="ms-3 text-sm font-medium">
                  {flash.success}
                </div>
                <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" aria-label="Close" onClick={handleCloseAlert}>
                  <span className="sr-only">Close</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="py-3">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg rounded-md">
            <table className="min-w-full divide-y py-3 divide-gray-200 bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr className="border-b-2">
                  <th className="px-6 py-3 text-left text-lg font-medium text-gray-700">Id</th>
                  <th className="px-6 py-3 text-left text-lg font-medium text-gray-700">Name</th>
                  <th className="px-6 py-3 text-left text-lg font-medium text-gray-700">Email</th>
                  <th className="px-6 py-3 text-left text-lg font-medium text-gray-700">Role</th>
                  <th className="px-6 py-3 text-left text-lg font-medium text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.data.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-100">
                    <td className="px-6 py-3 text-left text-lg text-gray-900">{user.id}</td>
                    <td className="px-6 py-3 text-left text-lg text-gray-900">{user.name}</td>
                    <td className="px-6 py-3 text-left text-lg text-gray-900">{user.email}</td>
                    <td className="px-6 py-3 text-left text-lg text-gray-900">{user.role}</td>
                    <td className="px-6 py-3 text-left text-lg">
                      <Link
                        href={route('users.update', user.id)}
                        className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-md"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination links={users.links} />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
