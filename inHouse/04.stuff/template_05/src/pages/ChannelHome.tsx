import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ChannelInfosSlice, RootState, store } from "../store/store";
import Layout from "./Layout";
import { getChannelInfos } from "../store/reducers/getChannelInfos";

const ChannelHome: React.FC = () => {
  const channelSelector = useSelector(
    (state: RootState) => state.channelInfosApp
  );
  return (
    <Layout>
      <div>ChannelHome</div>
    </Layout>
  );
};

export default ChannelHome;
