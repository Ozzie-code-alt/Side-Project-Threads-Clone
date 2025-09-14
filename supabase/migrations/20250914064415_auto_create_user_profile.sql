-- inserts a row into public.profiles
create function public.handle_new_user_users()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.users (id, name, email, tag, avatar_url)
  values (new.id, new.raw_user_meta_data ->> 'name', new.raw_user_meta_data ->> 'email', new.raw_user_meta_data ->> 'tag', new.raw_user_meta_data ->> 'avatar_url');
  return new;
end;
$$;

-- trigger the function every time a user is created
create trigger on_auth_user_created_users
  after insert on auth.users
  for each row execute procedure public.handle_new_user_users();