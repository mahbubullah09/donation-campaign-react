import { useEffect, useState } from "react";
import DonationCard from "./donationCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noData, setNodata] = useState();
  const [click, isClick] = useState(false);


  useEffect(() => {
    const donatesItem = JSON.parse(localStorage.getItem("donate"));
    if (donatesItem) {
      setDonation(donatesItem);
    } else {
      setNodata("No data found");
    }
  }, []);


  return (
    <div className="my-8 md:max-w-2xl  lg:max-w-4xl min-[1100px]:max-w-5xl mx-auto">
      {noData ? (
        <div className="  text-center h-screen my-60">
          <p className="   text-6xl font-bold">{noData}</p>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 mx-2 md:mx-16 lg:grid-cols-2 lg:mx-0 gap-4">
            {click
              ? donation.map((data) => (
                  <DonationCard key={data.id} data={data}></DonationCard>
                ))
              : donation
                  .slice(0, 4)
                  .map((data) => (
                    <DonationCard key={data.id} data={data}></DonationCard>
                  ))}
          </div>
          {
            donation.length > 4 ? <div
            className="text-center my-10"
            >
            <button
              onClick={() => isClick(true)}
              className={
                click
                  ? " hidden"
                  : " rounded bg-[#009444] text-white py-2 px-4  mx-auto "
              }
            >
              Show all
            </button>
          </div> 

          : ''

          }
        </div>
      )}
    </div>
  );
};

export default Donation;
