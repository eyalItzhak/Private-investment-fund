export async function getListOfProtfolio() {
  const data = { 1: "ac/dc", 2: "pink floyd", 3: "led zepalin" };
  let result = [];
  for (var i in data) result.push([i, data[i]]);
  return result;
}

export async function getProtfolioInfo(id) {
  let data;
  if (id === 1) {
    data = {
      contract: "0x455465",
      manager: "0x45465",
      numOfInvestor: 15,
      stackHolderList: ["0x212332", "0x546465"],
      yield: "100%",
      init_time: "16/04/1980",
      end_time: "14/04/1985",
      case_stock: 100,
      case_resrve: 100,
      startCase: 100,
    };
  } else if (id === 2) {
    data = {
      contract: "0x14445",
      manager: "0x5246",
      numOfInvestor: 10,
      stackHolderList: ["0x312332", "0x666465"],
      yield: "200%",
      init_time: "16/04/1980",
      end_time: "14/04/1985",
      case_stock: 150,
      case_resrve: 150,
      startCase: 100,
    };
  } else {
    data = {
      contract: "0x24445",
      manager: "0x8246",
      numOfInvestor: 10,
      stackHolderList: ["0x812332", "0x866465"],
      yield: "200%",
      init_time: "16/04/1980",
      end_time: "14/04/1985",
      case_stock: 150,
      case_resrve: 150,
      startCase: 100,
    };
  }
  return data;
}

export async function getRequstToManger(id) {
  console.log(id);
  let data;
  if (id === "1") {
    data = [
      {
        id: 1,
        stack: "money",
        why: ":)",
        ammount: 50,
        stat: "pending",
        pos: 2,
        neg: 1,
      },
      {
        id: 2,
        stack: "lot of money",
        why: "123",
        ammount: 20,
        stat: "accept",
        pos: 2,
        neg: 1,
      },
      {
        id: 3,
        stack: "money 1",
        why: ":23",
        ammount: 50,
        stat: "denie",
        pos: 2,
        neg: 1,
      },
    ];
  }
  if (id === "2") {
    data = [
      {
        id: 1,
        stack: "333",
        why: ":)",
        ammount: 50,
        stat: "pending",
        pos: 2,
        neg: 1,
      },
      {
        id: 2,
        stack: "2222",
        why: "123",
        ammount: 20,
        stat: "accept",
        pos: 2,
        neg: 1,
      },
      {
        id: 3,
        stack: "1111",
        why: ":23",
        ammount: 50,
        stat: "denie",
        pos: 2,
        neg: 1,
      },
    ];
  } else {
    data = [
      {
        id: 1,
        stack: "cccc",
        why: ":)",
        ammount: 50,
        stat: "pending",
        pos: 2,
        neg: 1,
      },
      {
        id: 2,
        stack: "yyyy",
        why: "123",
        ammount: 20,
        stat: "accept",
        pos: 2,
        neg: 1,
      },
      {
        id: 3,
        stack: "kkkk",
        why: ":23",
        ammount: 50,
        stat: "denie",
        pos: 2,
        neg: 1,
      },
    ];
  }

  console.log(data);
  return data;
}

export async function getPesonalInfo(id) {
  let data;
  if (id === "1") {
    data = {
      init_case: 100,
      current_case: 200,
      join_date: "31.08.1997",
      rank: "manager",
    };
    return data;
  }

  if (id === "2") {
    data = {
      init_case: 100,
      current_case: 70,
      join_date: "21.01.2005",
      rank: "stakeholder",
    };
    return data;
  }
  data = {
    init_case: 100,
    current_case: 100,
    join_date: "11.09.2009",
    rank: "investor",
  };

  return data;
}
