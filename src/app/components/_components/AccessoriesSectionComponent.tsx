import React from "react";

import AccessoriesSection from "@/components/sections/AccessoriesSection";

const AccessoriesSectionComponent = () => {
  return (
    <AccessoriesSection
      accessories={[
        {
          accessoryImage: "/assets/images/samples/sample-accessory.png",
          title: "Crank Case Cover Carbon",
          url: "#",
        },
        {
          accessoryImage: "/assets/images/samples/sample-accessory.png",
          title: "Crank Case Cover Carbon",
          url: "#",
        },
        {
          accessoryImage: "/assets/images/samples/sample-accessory.png",
          title: "Crank Case Cover Carbon",
          url: "#",
        },
        {
          accessoryImage: "/assets/images/samples/sample-accessory.png",
          title: "Crank Case Cover Carbon",
          url: "#",
        },
      ]}
    />
  );
};

export default AccessoriesSectionComponent;
