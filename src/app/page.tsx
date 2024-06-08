import axios from "axios";
import { MenuItem } from "../../interfaces/menu.interface";
import { withLayout } from "@/Layout/Layout";
import HomeClientComponent from "@/app/HomeClientComponent";

const HomeServerComponent = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, { firstCategory });

  return <HomeClientComponent menu={menu} />;
};

const HomeWithLayout = withLayout(HomeServerComponent);

export default HomeWithLayout;