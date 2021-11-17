function dynamicImport() {
  const dynamicPart = 'long'

  void import(
      `./../node_modules/@xtuc/long`
      // `./../node_modules/@xtuc/${dynamicPart}`
  ).then((module) => {
    console.log(`import successful!`, module);
  });
}

dynamicImport();
