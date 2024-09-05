import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const FetchData = () => {
  const { setTotal } = useContext(UserContext);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "https://goods24api.yelmarpariwar.com/admin/user",
          {
            auth: {
              username: "admin",
              password: "password",
            },
          }
        );
        if (response.data.status) {
          setTotal(response.data.pagination.limit);
        }
      } catch (error) {}
    };
    fetchdata();
  }, []);
  return <></>;
};
export default FetchData;
