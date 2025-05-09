import React, { useEffect, useState } from "react";
import { supabase } from "../../../supabaseClient";
import useWindowSize from "../../hooks/useWindowSize";
import CustomParallaxBanner from "../../components/Parralax/CustomParralax";



type FormValues = {
    createdAt: Date
  name: string;
  phone: string;
  date: string;
  time: string;
  people: number;
  option: string;
  notes?: string;
  email?: string;
};

const ITEMS_PER_PAGE = 20;

const Dashboard: React.FC = () => {
  const [data, setData] = useState<FormValues[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
console.log(data)
  // Fetch data with pagination
  const fetchData = async (page: number = 1) => {
    setLoading(true);
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE - 1;

    try {
      const { data, error, count } = await supabase
        .from("reservations")
        .select("*", { count: "exact" })
        .range(start, end);

      if (error) throw error;

      setData(data || []);
      setTotalItems(count || 0);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchData(page);
  };

  // Polling for new data every 30 seconds
  useEffect(() => {
    fetchData(currentPage);

    const interval = setInterval(() => {
      fetchData(currentPage);
    }, 30000);

    return () => clearInterval(interval);
  }, [currentPage]);

  // Calculate total pages
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
const {isMobile} = useWindowSize()
  return (<>
    <CustomParallaxBanner
        imageUrl="/toplogo.png"
        text="Dashboard"
        isMobile={isMobile}
      />
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr>  <th className="border border-gray-200 px-4 py-2 text-center">Дата створення</th>
                <th className="border border-gray-200 px-4 py-2 text-center">Ім'я</th>
                <th className="border border-gray-200 px-4 py-2 text-center">Тел</th>
                <th className="border border-gray-200 px-4 py-2 text-center">Дата</th>
                <th className="border border-gray-200 px-4 py-2 text-center">Чам</th>
                <th className="border border-gray-200 px-4 py-2 text-center">К-сть людей</th>
                <th className="border border-gray-200 px-4 py-2 text-center">Опція</th>
                <th className="border border-gray-200 px-4 py-2 text-center">Нотатки</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>          
                 <td className="border border-gray-200 px-4 py-2 text-center">{item?.date.toString()}</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">{item.name}</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">{item.phone}</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">{item.date}</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">{item.time}</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">{item.people}</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">{item.option}</td>
                  <td className="border border-gray-200 px-4 py-2text-center">{item.notes || "N/A"}</td>  
                       

                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`mx-1 px-3 py-1 rounded ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Dashboard;
