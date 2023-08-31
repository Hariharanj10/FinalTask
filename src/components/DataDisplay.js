import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { callApi } from "../redux/action";

const DataDisplay = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callApi());
  }, []);

  const userData = useSelector((state) => state?.userData?.datas.data);

  return (
    <div>
      {userData?.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default DataDisplay;
