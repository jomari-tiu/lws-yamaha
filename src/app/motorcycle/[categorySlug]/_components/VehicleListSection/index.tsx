"use client";

import MotorcycleCardList from "@/components/sections/MotorcycleCardList";
import useAPI from "@/hooks/useAPI";
import config from "@/utils/config";
import React from "react";

type PropsType = {
  vehicleCategoryId: number;
};

const VehicleListSection = (props: PropsType) => {
  const { useGet } = useAPI(
    `${config.apiNextBaseUrl}/api/categories/${props.vehicleCategoryId}/vehicles`
  );
  const { data: category, isError }: any = useGet([
    "categories",
    `${props.vehicleCategoryId}`,
    "vehicles",
  ]);

  if (isError) return;

  return (
    <MotorcycleCardList
      motorcycles={category?.data?.vehicles?.map((vehicle: any) => ({
        title: `${vehicle?.title}`,
        imageSrc: `${config.imageBaseUrl}${vehicle?.vehicleVariants?.[0]?.image}`,
        id: vehicle?.id,
        url: `/motorcycle/${category?.data?.slug}/${vehicle?.slug}`,
        features: vehicle?.vehicleFeatures
          ?.slice(0, 3)
          .map((feature: any) => feature?.title),
      }))}
      nowrap={false}
    />
  );
};

export default VehicleListSection;
