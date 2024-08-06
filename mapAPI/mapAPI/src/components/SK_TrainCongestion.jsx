import { useEffect } from "react";

function SK_TrainCongestion() {
  
  useEffect(() => async {
    const res = await axios.get(API_URL)

  }, [])


}

export default SK_TrainCongestion;