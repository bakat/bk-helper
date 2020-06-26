'use strict'

// standard > startup ; professional > business ; growth > scale
module.exports = {
  trial: {
    name: 'trial',
    jobSlot: 3,
    userSlot: 2,
    payments: {
      monthly: {
        idr: 0,
        usd: 0
      },
      annual: {
        idr: 0,
        usd: 0
      }
    },
    active: true
  },
  free: {
    name: 'free',
    jobSlot: 1,
    userSlot: 1,
    payments: {
      monthly: {
        idr: 0,
        usd: 0
      },
      annual: {
        idr: 0,
        usd: 0
      }
    },
    active: true
  },
  standard: {
    name: 'standard',
    jobSlot: 3,
    userSlot: 1,
    payments: {
      monthly: {
        idr: 499000,
        usd: 39
      },
      quarter: {
        idr: 1497000,
        usd: 117
      },
      annual: {
        idr: 4990000,
        usd: 390
      }
    },
    active: false
  },
  startup: {
    name: 'startup',
    jobSlot: 3,
    userSlot: 1,
    payments: {
      monthly: {
        idr: 533867,
        usd: 51
      },
      quarter: {
        idr: 1601601,
        usd: 153
      },
      annual: {
        idr: 5338680,
        usd: 533
      }
    },
    active: true
  },
  professional: {
    name: 'professional',
    jobSlot: 10,
    userSlot: 3,
    payments: {
      monthly: {
        idr: 1499000,
        usd: 116
      },
      quarter: {
        idr: 4497000,
        usd: 348
      },
      annual: {
        idr: 14990000,
        usd: 1160
      }
    },
    active: false
  },
  business: {
    name: 'business',
    jobSlot: 10,
    userSlot: 3,
    payments: {
      monthly: {
        idr: 1506238,
        usd: 150
      },
      quarter: {
        idr: 4518714,
        usd: 450
      },
      annual: {
        idr: 15062388,
        usd: 1505
      }
    },
    active: true
  },
  growth: {
    name: 'growth',
    jobSlot: 20,
    userSlot: 10,
    payments: {
      monthly: {
        idr: 2990000,
        usd: 206
      },
      quarter: {
        idr: 8970000,
        usd: 619
      },
      annual: {
        idr: 29900000,
        usd: 2062
      }
    },
    active: false
  },
  scale: {
    name: 'scale',
    jobSlot: 20,
    userSlot: 10,
    payments: {
      monthly: {
        idr: 5338680,
        usd: 533
      },
      quarter: {
        idr: 16016040,
        usd: 1599
      },
      annual: {
        idr: 53386808,
        usd: 5338
      }
    },
    active: true
  },
  enterprise: {
    name: 'enterprise',
    jobSlot: 1000,
    userSlot: 1000,
    payments: {
      monthly: {
        idr: 15990000,
        usd: 1103
      },
      quarter: {
        idr: 47970000,
        usd: 3308
      },
      annual: {
        idr: 191880000,
        usd: 13233
      }
    },
    active: true
  },
  enterpriseLite: {
    name: 'enterprise-lite',
    jobSlot: 1000,
    userSlot: 1000,
    payments: {
      monthly: {
        idr: 7990000,
        usd: 551
      },
      quarter: {
        idr: 23970000,
        usd: 1653
      },
      annual: {
        idr: 95880000,
        usd: 6612
      }
    },
    active: true
  },
  enterprisePremium: {
    name: 'enterprise-premium',
    jobSlot: 1000,
    userSlot: 1000,
    payments: {
      monthly: {
        idr: 15990000,
        usd: 1103
      },
      quarter: {
        idr: 47970000,
        usd: 3308
      },
      annual: {
        idr: 191880000,
        usd: 13233
      }
    },
    active: true
  }
}
