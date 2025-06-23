const BASE_URL = "http://117.247.193.197";

export const handleNavigation = {
    sales: () => window.open(`${BASE_URL}/testsaleswin`, "_blank"),
    groupLoan: () => window.open(`${BASE_URL}/testgrouploan`, "_blank"),
    goldLoan: () => window.open(`${BASE_URL}/teststockofs`, "_blank"),
    accounting: () => window.open(`${BASE_URL}/`, "_blank"),
    lab: () => window.open(`${BASE_URL}/teststockofs`, "_blank"),
    stockWin: () => window.open(`${BASE_URL}/teststockwin`, "_blank"),
    hrms: () => window.open(`${BASE_URL}/testhrms1`, "_blank"),
    payroll: () => window.open(`${BASE_URL}/testhrmspayrol`, "_blank"),
    production: () => window.open(`${BASE_URL}/testproduction`, "_blank"),
    retail: () => window.open(`${BASE_URL}/testretail`, "_blank"),
};
