import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";



const MultiSigFactoryModule = buildModule("MultiSigFactoryModule", (m) => {


  const MultiSigFactory = m.contract("MultiSigFactory");

  return { MultiSigFactory };
});

export default MultiSigFactoryModule;
