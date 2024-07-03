import Image from "next/image";

const UserList = ({ users, selectedUser, onSelectUser }) => {
  return (
    <div className="p-2">
      <ul>
        {users.map((user, idx) => (
          <li
            key={idx}
            className={`mb-4 p-4 rounded-lg cursor-pointer transition ${
              selectedUser?.idx === idx
                ? "bg-blue-100 border border-blue-300"
                : "bg-white border border-gray-200"
            }`}
            onClick={() => onSelectUser({ ...user, idx })}
          >
            <div className="flex items-center">
              <div className="w-16 h-16 mr-4 rounded-full ring-primary ring-offset-base-100 ring ring-offset-2">
                <Image
                  src={user?.avatar}
                  alt={`${user?.profile?.firstName} ${user?.profile?.lastName}`}
                  width={64}
                  height={64}
                  className="w-full h-full rounded-full"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold">{`${user?.profile?.firstName} ${user?.profile?.lastName}`}</h4>
                <p className="text-gray-600">{user?.profile?.email}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
