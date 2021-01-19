// To run with lodash enabled type the following command:
// node -r esm arrayswork
import get from "lodash/get";

const acquisitions = [
  {
    acquiringCompany: {
      id: 1,
      companyName: "Alex",
    },
    acquiredCompany: {
      id: 2,
      companyName: "Zalex",
    },
  },
];

const sortedData = acquisitions
  .map((i) => ({
    id: i.acquiredCompany.id,
    acquiredCompany: get(i.acquiredCompany, "companyName", "-"),
    acquiringCompany: get(i.acquiringCompany, "companyName", "-"),
  }))
  .slice();

console.log(acquisitions);

console.log(sortedData);
