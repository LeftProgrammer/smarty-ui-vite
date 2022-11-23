const { getData } = require("../fetch");
const axios = require("axios");
jext.mock("axios");
it("fetch", async () => {
    axios.get.mockResolvedValue('123');
    axios.get.mockResolvedValue('456');

    const data1 = await getData();
    const data2 = await getData();
    expect(data1).toBe('123');
    expect(data2).toBe('456');
})