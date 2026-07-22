import React from "react";
import { Building2, MapPin } from "lucide-react";
function ProfileCard({ user }) {
  if (!user) return null;

  return (
    <div
      className="
        mx-auto
        mt-8
        flex
        flex-col
        items-center
        gap-6
        rounded-2xl
        bg-white
        p-6
        shadow-md
        transition
        duration-300
        hover:shadow-lg
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      <div className="flex gap-6 items-start">
        <img
          src={user.avatar_url}
          alt={`${user.login} avatar`}
          className="
          h-24
          w-24
          rounded-full
          border-4
          border-blue-100
          object-cover
          shadow-sm
        "
        />

        <section
          className="
          flex
          flex-col
          items-center
          text-center
          sm:items-start
          sm:text-left
          flex-1
        "
        >
          <h2
            className="
            text-2xl
            font-bold
            text-gray-900
          "
          >
            {user.name || "No Name Available"}
          </h2>

          <p
            className="
            mt-1
            text-base
            text-gray-500
          "
          >
            @{user.login}
          </p>

          <p
            className="
mt-4
max-w-xl
text-sm
leading-6
text-gray-600
"
          >
            {user.bio || "No Bio Available"}
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-gray-700">
            <Building2 className="h-4 w-4 text-gray-500" />
            {user.company || "N/A"}
          </p>

          <p className="mt-2 flex items-center gap-2 text-sm text-gray-700">
            <MapPin className="h-4 w-4 text-gray-500" />
            {user.location || "N/A"}
          </p>
        </section>
      </div>
      <div className="stats">
        <div className="mt-8 grid grid-cols-3 gap-6 border-t border-gray-200 pt-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-gray-900">{user.followers}</p>
            <p className="mt-1 text-sm text-gray-500">Followers</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-gray-900">{user.following}</p>
            <p className="mt-1 text-sm text-gray-500">Following</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-gray-900">
              {user.public_repos}
            </p>
            <p className="mt-1 text-sm text-gray-500">Repositories</p>
          </div>
        </div>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          justify-center
          rounded-lg
          bg-blue-600
          px-5
          py-2.5
          text-sm
          font-semibold
          text-white
          transition
          duration-200
          hover:bg-blue-700
          focus:outline-none
          focus:ring-2
          focus:ring-blue-300
        "
      >
        Visit Profile
      </a>
    </div>
  );
}

export default ProfileCard;
