const expect = require('chai').expect
describe('Test bk-helper index', () => {
  describe('* test applicantStatus', () => {
    it('should an object ', (done) => {
      const { activityStatus } = require('../index')
      expect(activityStatus).to.be.a('object')
      done()
    })
  })

  describe('* test applicantStatus', () => {
    it('should an array ', (done) => {
      const { applicantStatus } = require('../index')
      expect(applicantStatus).to.be.a('array')
      done()
    })
  })

  describe('* test companySize', () => {
    it('should an array ', (done) => {
      const { companySize } = require('../index')
      expect(companySize).to.be.a('array')
      done()
    })
  })

  describe('* test countryCode', () => {
    it('should an array ', (done) => {
      const { countryCode } = require('../index')
      expect(countryCode).to.be.a('array')
      done()
    })
  })

  describe('* test creditType', () => {
    it('should an object ', (done) => {
      const { creditType } = require('../index')
      expect(creditType).to.be.a('object')
      done()
    })
  })

  describe('* test currency', () => {
    it('should an object ', (done) => {
      const { currency } = require('../index')
      expect(currency).to.be.a('object')
      done()
    })
  })

  describe('* test cutEAssessment', () => {
    it('should an object ', (done) => {
      const { cutEAssessment } = require('../index')
      expect(cutEAssessment).to.be.a('object')
      done()
    })
  })

  describe('* test educations', () => {
    it('should an array ', (done) => {
      const { educations } = require('../index')
      expect(educations).to.be.a('array')
      done()
    })
  })

  describe('* test employmentType', () => {
    it('should an array ', (done) => {
      const { employmentType } = require('../index')
      expect(employmentType).to.be.a('array')
      done()
    })
  })

  describe('* test featuresBaseOnPlan', () => {
    it('should an object ', (done) => {
      const { featuresBaseOnPlan } = require('../index')
      expect(featuresBaseOnPlan).to.be.a('object')
      done()
    })
  })

  describe('* test industries', () => {
    it('should an array ', (done) => {
      const { industries } = require('../index')
      expect(industries).to.be.a('array')
      done()
    })
  })

  describe('* test invoiceType', () => {
    it('should an array ', (done) => {
      const { invoiceType } = require('../index')
      expect(invoiceType).to.be.a('array')
      done()
    })
  })

  describe('* test jobExperiences', () => {
    it('should an array ', (done) => {
      const { jobExperiences } = require('../index')
      expect(jobExperiences).to.be.a('array')
      done()
    })
  })

  describe('* test jobFunction', () => {
    it('should an array ', (done) => {
      const { jobFunction } = require('../index')
      expect(jobFunction).to.be.a('array')
      done()
    })
  })

  describe('* test maritalStatus', () => {
    it('should an array ', (done) => {
      const { maritalStatus } = require('../index')
      expect(maritalStatus).to.be.a('array')
      done()
    })
  })

  describe('* test masterPartners', () => {
    it('should an object ', (done) => {
      const { masterPartners } = require('../index')
      expect(masterPartners).to.be.a('object')
      done()
    })
  })

  describe('* test positionStatus', () => {
    it('should an array ', (done) => {
      const { positionStatus } = require('../index')
      expect(positionStatus).to.be.a('array')
      done()
    })
  })

  describe('* test priceList', () => {
    it('should an object ', (done) => {
      const { priceList } = require('../index')
      expect(priceList).to.be.a('object')
      done()
    })
  })

  describe('* test questionModels', () => {
    it('should an object ', (done) => {
      const { questionModels } = require('../index')
      expect(questionModels).to.be.a('object')
      done()
    })
  })

  describe('* test religion', () => {
    it('should an array ', (done) => {
      const { religion } = require('../index')
      expect(religion).to.be.a('array')
      done()
    })
  })

  describe('* test reportStatus', () => {
    it('should an array ', (done) => {
      const { reportStatus } = require('../index')
      expect(reportStatus).to.be.a('array')
      done()
    })
  })

  describe('* test subscriptionType', () => {
    it('should an array ', (done) => {
      const { subscriptionType } = require('../index')
      expect(subscriptionType).to.be.a('array')
      done()
    })
  })

  describe('* test timezone', () => {
    it('should an array ', (done) => {
      const { timezone } = require('../index')
      expect(timezone).to.be.a('array')
      done()
    })
  })

  describe('* test UserPermission', () => {
    it('should an object ', (done) => {
      const { UserPermission } = require('../index')
      expect(UserPermission).to.be.a('object')
      done()
    })
  })
})
