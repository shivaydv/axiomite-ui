import UnderDevelopment from "@/components/UnderDevelopment";

const page = async() => {

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating a delay for demonstration
  return <UnderDevelopment />;
};

export default page;
