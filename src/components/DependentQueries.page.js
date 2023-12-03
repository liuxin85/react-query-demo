import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4001/users/${email}`);
};

const fetchCousesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4001/channels/${channelId}`);
};
const DependentQueriesPage = ({ email }) => {
  const { data: users } = useQuery(["user", email], () => fetchUserByEmail(email));

  const channelId = users?.data.channelId;

  useQuery(["courses", channelId], () => fetchCousesByChannelId(channelId), {
    enabled: !!channelId,
  });

  return <div>DependtQueries</div>;
};

export default DependentQueriesPage;
