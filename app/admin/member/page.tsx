import React from 'react';
import Layout from '../layout';
import Header from "@/app/admin/components/Header"
import User from '@/app/admin/member/components/User';

export default function DashboardPage() {

  return (
    <Layout>
      <div className="flex-1">
        <div className="flex flex-col h-screen">
        <Header/>
          <User />
        </div>
      </div>
    </Layout>
  );
}
