import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SelectBox from '@/Components/SelectBox';
import roles from '@/data/roles.json'

export default function EditUser({ users, auth }) {
  console.log('DATa' + users.id)
  const { data, setData, patch, processing, errors, reset } = useForm({
    name: users.name,
    email: users.email,
    password: '',
    password_confirmation: '',
    role: users.role
  });


  useEffect(() => {
    return () => {
      preserveScroll: true,
        reset('password', 'password_confirmation');
    };
  }, []);



  const submit = (e) => {
    e.preventDefault();
    console.log(data);
    patch(route('users.update', users.id));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>}
    >
      <Head title="Users" />
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Create User</h2>
        <form onSubmit={submit}>
          <div>
            <InputLabel htmlFor="name" value="Name" />

            <TextInput
              id="name"
              name="name"
              value={data.name}
              className="mt-1 block w-full"
              autoComplete="name"
              isFocused={true}
              onChange={(e) => setData('name', e.target.value)}
              required
            />

            <InputError message={errors.name} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="email" value="Email" />

            <TextInput
              id="email"
              type="email"
              name="email"
              value={data.email}
              className="mt-1 block w-full"
              autoComplete="username"
              onChange={(e) => setData('email', e.target.value)}
              required
            />

            <InputError message={errors.email} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="role" value="Role" />

            <SelectBox
              id="role"
              name="role"
              className="mt-1 block w-full"
              value={data.role}
              onChange={(e) => {
                console.log('Selected Role:', e.target.value);
                setData('role', e.target.value)
              }}
              required
              options={roles}
            />

            <InputError message={errors.role} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="password" value="Password" />

            <TextInput
              id="password"
              type="password"
              name="password"
              value={data.password}
              className="mt-1 block w-full"
              autoComplete="new-password"
              onChange={(e) => setData('password', e.target.value)}

            />

            <InputError message={errors.password} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

            <TextInput
              id="password_confirmation"
              type="password"
              name="password_confirmation"
              value={data.password_confirmation}
              className="mt-1 block w-full"
              autoComplete="new-password"
              onChange={(e) => setData('password_confirmation', e.target.value)}

            />

            <InputError message={errors.password_confirmation} className="mt-2" />
          </div>

          <div className="flex items-center justify-end mt-4">
            <PrimaryButton className="ms-4" disabled={processing}>
              Register
            </PrimaryButton>
          </div>
        </form>
      </div>
    </AuthenticatedLayout>
  );
}
