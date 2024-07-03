// How to disable a button based on user role?

// Solution:
export const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  // fetch user...

  return (
    <div>
      {user && user.roles.some((role) => role.name === 'admin') ? (
        <button>Edit button</button>
      ) : (
        <button disabled>Edit button</button>
      )}
    </div>
  );
};

// How to disable a button based on user permissions?

// Solution:

export const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  // fetch user...

  return (
    <div>
      {user && user.permissions.includes('edit') ? (
        <button>Edit button</button>
      ) : (
        <button disabled>Edit button</button>
      )}
    </div>
  );
};

// How to create permissions on frontend when we have only roles?

// Solution:

const roles = [
  'admin',
  'editor',
  'viewer',
];

const permissions = {
  admin: ['edit', 'delete'],
  editor: ['edit'],
  viewer: [],
};

const user = {
  roles: ['admin'],
  permissions: permissions['admin'],
};
