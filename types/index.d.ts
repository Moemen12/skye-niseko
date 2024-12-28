export declare interface NavLink {
  id: number;
  title: string;
}

export declare interface FooterIcon {
  id: number;
  alt: string;
  icon: string;
}

/* eslint-disable @typescript-eslint/no-empty-object-type */
export declare interface InfoLink extends NavLink {}

interface Benefits {
  aircon: boolean;
  appletv: boolean;
  btspeakers: boolean;
  cardkey: boolean;
  chromecast: boolean;
  fireplace: boolean;
  hdtv: boolean;
  jacuzzi: boolean;
  nespresso: boolean;
}

export declare interface Property {
  id: string;
  propertyTypeId: number;
  propertyType: boolean;
  name: string;
  description: string;
  code: string;
  baseRoom: string;
  gradeId: number;
  gradeSort: number;
  locationId: number;
  accomTypeId: number;
  viewId: number;
  kitchenId: number;
  liftDistanceId: number;
  villageCentreDistanceId: number;
  bathrooms: number;
  standardPax: number;
  maximumPax: number;
  soldSeparately: boolean;
  upgradedFacilities: boolean;
  amenities: Benefits;
  bedConfigurations: number[];
  status: string;
  floorArea: number;
  online: boolean;
  images: string[];
}
