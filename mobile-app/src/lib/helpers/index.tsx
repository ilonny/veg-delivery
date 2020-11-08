export const debounce = (f: Function, ms: number) => {
  let isCooldown = false;
  return function () {
    if (isCooldown) return;
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => (isCooldown = false), ms);
  };
};

export const getLanLonFromAddressJson = (addressData) => {
  if (
    addressData &&
    addressData.data &&
    addressData.data.geo_lat &&
    addressData.data.geo_lon
  ) {
    return { lat: addressData.data.geo_lat, lon: addressData.data.geo_lon };
  }
  return false;
};
