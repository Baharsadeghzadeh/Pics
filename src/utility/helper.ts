export function getApiUrl(
  category: string,
  controller: string,
  action: string
) {
  category = category.length == 0 ? "default" : category;
  return `/didgah/Humanresourses/Welfare/${category}/${controller}/${action}`;
}

export const SoftwareGuid = "97906B66-EF66-4A12-95BB-EA7EE4E5CACE";

// export function isNewRecord<T>(record: any, keyField: string = "Guid") {
//   if (!record || !record[keyField]) return true;
//   return record[keyField].toString().indexOf("temp") !== -1;
// }

export function getActiveFilterSource() {
  let activeSource = [];
  activeSource.push({ key: "All", value: "-1" });
  activeSource.push({ key: "Active", value: "1" });
  activeSource.push({ key: "Inactive", value: "0" });
  return activeSource;
}

export function getEnumValues(enumType: any, includeAll: boolean) {
  let items = [];
  for (let item in enumType) {
    if (!isNaN(Number(item)) && Number(item) > 0) {
      var title = enumType[Number(item)].toString();
      items.push({ key: title, value: Number(item) });
    }
  }
  if (includeAll) items.unshift({ key: "All", value: 0 });

  return items;
}

export function getGuidEnumValues(enumType: any, includeAll: boolean) {
  let items = [];
  for (let item in enumType) {
    var title = item.toString();
    items.push({ key: title, value: enumType[item] });
  }
  if (includeAll)
    items.unshift({
      key: "All",
      value: "00000000-0000-0000-0000-000000000000",
    });

  return items;
}

export function getDateMinValue(): Date {
  return new Date("1900-01-01");
}

export function buildAutoCompleteItem(items: any[]) {
  return (items || []).map((x) => ({
    value: x.Guid || x.id,
    label: x.Title || x.title,
  }));
}

export const transformToKeyValue = (arrayToTransform: any[]) =>
  arrayToTransform &&
  arrayToTransform.map((item) => ({ key: item.Title, value: item.Id }));

export const transformToTextValue = (arrayToConvert: any[]) =>
  arrayToConvert &&
  arrayToConvert.map((item) => ({
    text: item.Title,
    value: item.Id,
    guid: item.Guid,
  }));
