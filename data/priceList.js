'use strict'

const EXPIRED_DATE = new Date('2020-07-13T17:00:00.000Z')

// standard > startup ; professional > business ; growth > scale
module.exports = {
  trial: {
    name: 'trial',
    jobSlot: 3,
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
    expiredAt: null
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
    expiredAt: null
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
    expiredAt: EXPIRED_DATE
  },
  startup: {
    name: 'startup',
    jobSlot: 3,
    userSlot: 1,
    payments: {
      monthly: {
        idr: 599000,
        usd: 59.90
      },
      quarter: {
        idr: 1797000,
        usd: 179.70
      },
      annual: {
        idr: 5990000,
        usd: 599
      }
    },
    expiredAt: null,
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
    expiredAt: EXPIRED_DATE
  },
  business: {
    name: 'business',
    jobSlot: 10,
    userSlot: 3,
    payments: {
      monthly: {
        idr: 1690000,
        usd: 169
      },
      quarter: {
        idr: 5070000,
        usd: 507
      },
      annual: {
        idr: 16900000,
        usd: 1690
      }
    },
    expiredAt: null
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
    expiredAt: EXPIRED_DATE
  },
  scale: {
    name: 'scale',
    jobSlot: 20,
    userSlot: 10,
    payments: {
      monthly: {
        idr: 5990000,
        usd: 599
      },
      quarter: {
        idr: 17970000,
        usd: 1797
      },
      annual: {
        idr: 59900000,
        usd: 5990
      }
    },
    expiredAt: null
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
    }
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
    }
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
    }
  }
}
