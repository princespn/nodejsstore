List of Input compulsory.
-Carriers
-Carrier(Company Code of carrier to be quoted)
-Province
-EffDate(Effective date of the quote.)
-QuoteInfo
-CodeNames

--vehicle(ID)
--vehicleTotal
--Coverage
--Location
--LocationIndex
--Owned
--PostalCode
--ProductLine
--VICCCode
--VICCCodeExt
--Year

--AntitheftDevice(ID)
---DeviceType

-DriverProfile(ID)
--Birthdate
--Gender
--MaritalStatus


--RelationshipToApplicant
-VehLink(ID-Unique ID) (Relation between vehicle and DriverProfile)
--DriverID
--VehicleID
--Link(Principal, Occasional and Excluded Driver)

-Claim(ID-Unique ID)
--ClaimDate
--ClaimType
--DriverID
--VehicleID

-Conviction(ID-Unique ID)
--ConvictionDate
--DriverID
--OffenceCode
--Severity

5-RegistryOverrides


{
  "quoteGuid": "990B776F0DDE414D9C906698FE3C0AF3",
  "quoteIterationGuid": "BBC38638877B460FFFB9E89105C4DF61",
  "carrierquoteGuid": "990B776F0DDE414D9C906698FE3C0AF3",
  "province": "ON",
  "renewal": "NO",
  "carriersXml": ["GA", "GA2", "TRG", "TRG2", "COA", "ECON", "DOC", "DOC3", "DOC2", "FAC", "HAL", "HAL3", "JEV", "PAF", "PEM", "SGI", "CIC", "WAW3", "WAWA"],
  "originalPolicyEffdate": "20250501",
  "originalQuotedate": "20250503",
  "transactiondate": "20250503",
  "effdate": "20250504",
  "combinedPolicy": "A",
  "contractAttrs": {
    "vorGA": "A1000023937",
    "vorCOA": "B0151-14",
    "vorDOC": "6753604",
    "vorHAL": "45893",
    "vorECON": "6823",
    "vorHAL3": "45893",
    "vorJEV": "55812",
    "vorSGI": "B0151-13",
    "vorCIC": "6723604",
    "vorWAWA": "0785077"
  },
  "clientInfo": {
    "id": "000000000064962",
    "postalCode": "L7A4M2",
    "province": "ON"
  },
  "vehicles": [
    {
      "BodyType": "P4",
      "DistanceDaily": 5,
      "DistanceYearly": 9000,
      "FuelType": 3,
      "Hybrid": "N",
      "ID": "00030777",
      "Location": "WOODSTOCK",
      "LocationIndex": 1208,
      "MakeAndModel": "IS 300 4DR AWD",
      "Manufacturer": "LEXUS",
      "nCylinders": 6,
      "NightParking": "Driveway",
      "Owned": "N",
      "PostalCode": "N4T0P5",
      "ProductLine": "Personal",
      "PurchaseCondition": "N",
      "PurchaseDate": "20220501",
      "PurchasePrice": 60000,
      "Territory": 105,
      "ValueNew": 47775,
      "VehType": "Private Passenger",
      "VehUse": "Pleasure",
      "VICCCode": 1780,
      "VICCCodeExt": 178000,
      "VRAB": 33,
      "VRColl": 54,
      "VRComp": 60,
      "VRLiab": 54,
      "WinterTires": "Y",
      "Year": 2023,
      "AntitheftDevice": [
        { "DeviceType": "Monitored", "ID": 1, "Manufacturer": "Tag" },
        { "DeviceType": "Engraving", "ID": 2, "Manufacturer": "Tag" }
      ],
      "Coverage": [
        { "CSIOCode": "TPBI", "ID": "01", "Limit1": 1000000 },
        { "CSIOCode": "TPPD", "ID": "02", "Limit1": 1000000 },
        { "CSIOCode": "TPDC", "ID": "03", "Deductible": 0 },
        { "CSIOCode": "AB", "ID": "04" },
        { "CSIOCode": "AP", "ID": "05", "Deductible": 1000 },
        { "CSIOCode": "UA", "ID": "06" },
        { "CSIOCode": "5A", "ID": "07" },
        { "CSIOCode": "20", "ID": "08", "Limit2": 1500 },
        { "CSIOCode": "27", "ID": "09", "Limit1": 50000 },
        { "CSIOCode": "35", "ID": "10" },
        { "CSIOCode": "41", "ID": "11" },
        { "CSIOCode": "44", "ID": "12", "Limit1": 1000000 },
        { "CSIOCode": "ACCW", "ID": "13" },
        { "CSIOCode": "MCP", "ID": "14" },
        {
          "ID": "15",
          "CSIOCode": "FEE",
          "vorGA": "SkipBranch",
          "vorGA2": "SkipBranch",
          "vorTRG": "SkipBranch",
          "vorTRG2": "SkipBranch",
          "vorCOA": "SkipBranch",
          "vorECON": "SkipBranch",
          "vorDOC": "SkipBranch",
          "vorDOC3": "SkipBranch",
          "vorDOC2": "SkipBranch",
          "vorHAL": "SkipBranch",
          "vorHAL3": "SkipBranch",
          "vorJEV": "SkipBranch",
          "vorPAF": "SkipBranch",
          "vorPEM": "SkipBranch",
          "vorSGI": "SkipBranch",
          "vorCIC": "SkipBranch",
          "vorWAW3": "SkipBranch",
          "vorWAWA": "SkipBranch"
        }
      ]
    }
  ],
  "drivers": [
    {
      "AirBrake": "N",
      "AutoCompanyCode": "TRG",
      "Birthdate": "19960113",
      "DateContinuousInsurance": "20170501",
      "DateWithCompany": "20230501",
      "DriverTraining": "N",
      "Gender": "F",
      "ID": "00033999",
      "MaritalStatus": "M",
      "MotoAdvancedTraining": "N",
      "PostSecDegree": "N",
      "RelationshipToApplicant": "Insured",
      "DriverLicense": [
        {
          "Country": "CA",
          "ID": 1,
          "LicenseClass": "G",
          "LicenseDate": "20180102",
          "ProvinceState": "ON"
        },
        {
          "Country": "CA",
          "ID": 2,
          "LicenseClass": "G2",
          "LicenseDate": "20170102",
          "ProvinceState": "ON"
        },
        {
          "Country": "CA",
          "ID": 3,
          "LicenseClass": "G1",
          "LicenseDate": "20160102",
          "ProvinceState": "ON"
        }
      ]
    },
    {
      "AirBrake": "N",
      "AutoCompanyCode": "TRG",
      "Birthdate": "19950309",
      "DateContinuousInsurance": "20130327",
      "DateWithCompany": "20230501",
      "DriverTraining": "N",
      "Gender": "M",
      "ID": "00034000",
      "MaritalStatus": "M",
      "MotoAdvancedTraining": "N",
      "OutsideExp": "Y",
      "PostSecDegree": "N",
      "RelationshipToApplicant": "Spouse",
      "DriverLicense": [
        {
          "Country": "CA",
          "ID": 1,
          "LicenseClass": "G",
          "LicenseDate": "20130327",
          "ProvinceState": "ON"
        }
      ],
      "GroupPlan": [
        {
          "GroupPlanDescr": "ECON 10",
          "ID": 1,
          "VehType": "Private Passenger"
        }
      ]
    }
  ]
}
