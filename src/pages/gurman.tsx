import {
  useUser,
  useSupabaseClient,
  Session,
} from "@supabase/auth-helpers-react";

import { useEffect, useState } from "react";
import { Database } from "@/database/types";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import Avatar from "@/components/heder-components/Avatar";
type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

export default function Gurman({
  session,
  data,
}: {
  session: Session;
  data: Profiles;
}) {
  const router = useRouter();
  const supabase = useSupabaseClient<Database>();
  const user = useUser();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState<Profiles["username"]>(data.username);
  const [website, setWebsite] = useState<Profiles["website"]>(data.website);
  const [avatar_url, setAvatarUrl] = useState<Profiles["avatar_url"]>(
    data.avatar_url
  );

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: Profiles["username"];
    website: Profiles["website"];
    avatar_url: Profiles["avatar_url"];
  }) {
    try {
      setLoading(true);
      if (!user) throw new Error("No user");

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-widget py-10 ">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 xl:w-6/12 w-10/12 mx-auto">
        <Avatar
          data={data}
          uid={user?.id!}
          url={avatar_url}
          size={300}
          onUpload={(url) => {
            setAvatarUrl(url);
            updateProfile({ username, website, avatar_url: url });
          }}
        />

        <div className="py-2">
          <label htmlFor="email">Емаил</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            value={session?.user.email}
            disabled
          />
        </div>
        <div className="py-2">
          <label htmlFor="username">Корисничко име</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="py-2">
          <label htmlFor="website">Веб Сајт</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="website"
            type="website"
            value={website || ""}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div className=" flex py-5">
          <div>
            <button
              className="button primary block text-white bg-OrangePrimary py-1 px-2 rounded mr-3"
              onClick={() => updateProfile({ username, website, avatar_url })}
              disabled={loading}
            >
              {loading ? "Loading ..." : "Промени"}
            </button>
          </div>

          <div>
            <button
              className={`button block text-white bg-OrangePrimary py-1 px-2 rounded`}
              onClick={() =>
                `${supabase.auth.signOut()}`
                  ? `${router.push("/")}`
                  : `${router.push("")}`
              }
            >
              Одјави се
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", session.user.id)
      .single();
    return {
      props: {
        data,
      },
    };
  }

  return {
    props: {
      initialSession: session,
      user: session!.user,
    },
  };
};
