import { useEffect, useState } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { StatsCard } from "@/components/admin/StatsCard";
import { Users, MessageSquare, Package, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/useAdminAuth";

export default function AdminDashboard() {
  const { user, isAdmin, isLoading, redirectIfNotAdmin } = useAdminAuth();
  const [stats, setStats] = useState({
    users: 0,
    contacts: 0,
    consultations: 0,
    products: 0,
  });

  useEffect(() => {
    if (!isLoading) {
      redirectIfNotAdmin();
    }
  }, [isLoading, isAdmin, user]);

  useEffect(() => {
    async function fetchStats() {
      const [usersRes, contactsRes, consultationsRes, productsRes] = await Promise.all([
        supabase.from('profiles').select('id', { count: 'exact', head: true }),
        supabase.from('contact_submissions').select('id', { count: 'exact', head: true }),
        supabase.from('consultations').select('id', { count: 'exact', head: true }),
        supabase.from('products').select('id', { count: 'exact', head: true }),
      ]);

      setStats({
        users: usersRes.count || 0,
        contacts: contactsRes.count || 0,
        consultations: consultationsRes.count || 0,
        products: productsRes.count || 0,
      });
    }

    if (isAdmin && !isLoading) {
      fetchStats();
    }
  }, [isAdmin, isLoading]);

  if (isLoading) {
    return <div className="flex h-screen items-center justify-center bg-background">Loading...</div>;
  }

  if (!isAdmin) {
    redirectIfNotAdmin();
    return null;
  }

  return (
    <div className="flex h-screen w-full bg-background">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <h1 className="text-3xl font-heading font-bold mb-8">Dashboard Overview</h1>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total Users"
              value={stats.users}
              icon={Users}
              description="Registered users"
            />
            <StatsCard
              title="Contact Messages"
              value={stats.contacts}
              icon={MessageSquare}
              description="Form submissions"
            />
            <StatsCard
              title="Consultations"
              value={stats.consultations}
              icon={Calendar}
              description="Booking requests"
            />
            <StatsCard
              title="Products"
              value={stats.products}
              icon={Package}
              description="Total products"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
