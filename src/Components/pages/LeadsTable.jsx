import { useState } from "react";


// Sample data
const initialLeads = [
  {
    id: 1,
    date: "2025-05-06 10:00 AM",
    name: "Aarav Rajat",
    contact: "272 129 6166",
    destination: "Australia",
    counselor: "Lipika Ritu",
    status: "Offer Applied",
  },
  {
    id: 2,
    date: "2025-05-05 11:45 AM",
    name: "Huirong Huixian",
    contact: "720 722 4561",
    destination: "Canada",
    counselor: "Falguni Paromita",
    status: "Dropped",
  },
  {
    id: 3,
    date: "2025-05-04 09:30 AM",
    name: "Kunal Bhas",
    contact: "981 234 5678",
    destination: "USA",
    counselor: "Ravi Sharma",
    status: "Pending",
  },
];


const statusColors = {
  "Offer Applied": "bg-green-100 text-green-800",
  Dropped: "bg-red-100 text-red-800",
  Pending: "bg-yellow-100 text-yellow-800",
};

export default function LeadsTable() {
  const [search, setSearch] = useState("");
  const [leads, setLeads] = useState(initialLeads);

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.destination.toLowerCase().includes(search.toLowerCase()) ||
      lead.counselor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md overflow-x-auto">
    
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-3">
        <div className="flex items-center gap-2">
          <label>Show:</label>
          <select className="border rounded px-2 py-1">
            <option>All</option>
            <option>Offer Applied</option>
            <option>Dropped</option>
            <option>Pending</option>
          </select>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search……"
            className="border rounded px-3 py-1 w-full md:w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="flex items-center  text-2xl h-10 w-20 text-center  border rounded  bg-gray-400 p-y-10 hover:bg-gray-200">
        search
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">S.N</th>
            <th className="px-4 py-2 text-left">Created Date</th>
            <th className="px-4 py-2 text-left">Student Details</th>
            <th className="px-4 py-2 text-left">Destination</th>
            <th className="px-4 py-2 text-left">Counselor</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredLeads.length > 0 ? (
            filteredLeads.map((lead, index) => (
              <tr
                key={lead.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{lead.date}</td>
                <td className="px-4 py-2 flex items-center gap-2">
                  {lead.name}
                  <span className="text-gray-500">{lead.contact}</span>
                </td>
                <td className="px-4 py-2">{lead.destination}</td>
                <td className="px-4 py-2">{lead.counselor}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[lead.status]}`}
                  >
                    {lead.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="text-center text-gray-500 py-6"
              >
                No leads found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
