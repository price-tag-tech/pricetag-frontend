import { useState } from "react";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import Status from "../../../components/ui/status";
import DataTable from "../../../components/ui/data-table";
import Button from "../../../components/common/Button";

const NewUsersRequest = () => {
  const [page, setPage] = useState(1);

  const tableData = [
    {
      name: "Lush Salon",
      owner: "Sarah Ajayi",
      email: "sarah@lushsalon.ng",
      phone: "08012345678",
      status: <Status label="Pending" state="pending" />,
      submitted: "July 10, 2025",
    },
    {
      name: "QuickFix Auto",
      owner: "Michael Obi",
      email: "mike@quickfix.com",
      phone: "07088887777",
      status: <Status label="Pending" state="pending" />,
      submitted: "July 9, 2025",
    },
    {
      name: "FreshMart",
      owner: "Chidera Okoro",
      email: "chidera@freshmart.io",
      phone: "08198765432",
      status: <Status label="Pending" state="pending" />,
      submitted: "July 7, 2025",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Pending Business Verifications</h2>

      <DataTable
        cols={["Business", "Owner", "Email", "Phone", "Status", "Submitted"]}
        keys={["name", "owner", "email", "phone", "status", "submitted"]}
        data={tableData}
        serialized
        action
        onView={(row) => { window.location.href = `/admin/user/${row.name}` }}
      />

      <div className="w-full mt-6 flex justify-between items-center text-sm text-gray-600">
        <div>Showing {tableData.length} entries</div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            <ChevronsLeft className="h-4" />
          </Button>
          <span>Page {page}</span>
          <Button variant="outline" size="sm">
            <ChevronsRight className="h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewUsersRequest;
