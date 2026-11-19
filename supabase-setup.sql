-- Landmark Computers: shared product catalogue setup
-- Run this entire script once in Supabase > SQL Editor > New query.
-- Then create ONE admin user in Authentication > Users and disable public sign-ups.
-- The website uses a publishable key in the browser; never put a secret/service-role key here.

create table if not exists public.products (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.products enable row level security;

grant select on public.products to anon, authenticated;
grant insert, update, delete on public.products to authenticated;

drop policy if exists "Public can read products" on public.products;
create policy "Public can read products"
  on public.products for select
  to anon, authenticated
  using (true);

drop policy if exists "Signed-in admin can insert products" on public.products;
create policy "Signed-in admin can insert products"
  on public.products for insert
  to authenticated
  with check (auth.uid() is not null);

drop policy if exists "Signed-in admin can update products" on public.products;
create policy "Signed-in admin can update products"
  on public.products for update
  to authenticated
  using (auth.uid() is not null)
  with check (auth.uid() is not null);

drop policy if exists "Signed-in admin can delete products" on public.products;
create policy "Signed-in admin can delete products"
  on public.products for delete
  to authenticated
  using (auth.uid() is not null);

-- Public product photos; only signed-in users can upload, replace, or delete.
insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do update set public = true;

drop policy if exists "Public can view product images" on storage.objects;
create policy "Public can view product images"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'product-images');

drop policy if exists "Signed-in admin can upload product images" on storage.objects;
create policy "Signed-in admin can upload product images"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'product-images' and auth.uid() is not null);

drop policy if exists "Signed-in admin can update product images" on storage.objects;
create policy "Signed-in admin can update product images"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'product-images' and auth.uid() is not null)
  with check (bucket_id = 'product-images' and auth.uid() is not null);

drop policy if exists "Signed-in admin can delete product images" on storage.objects;
create policy "Signed-in admin can delete product images"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'product-images' and auth.uid() is not null);
