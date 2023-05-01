const constructs = {
  genericTable: {
    type: "database/dynamodb-single-table",
    gsiCount: 1,
    localSecondaryIndexes: true,
    extensions: {
      table: {
        Properties: {
          DeletionProtectionEnabled: false,
        },
      },
    },
  },
};

export default constructs;
