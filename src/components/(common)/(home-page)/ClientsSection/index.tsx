import Link from "next/link";

const clients = [
  {
    _id: "client-1",
    name: "client-1",
    image: "/images/clients/1.png",
  },
  {
    _id: "client-2",
    name: "client-2",
    image: "/images/clients/2.png",
  },
  {
    _id: "client-3",
    name: "client-3",
    image: "/images/clients/3.png",
  },
];

const ClientsSection = () => {
  return (
    <section id="clients" className="intersection-fade-in py-16 md:py-24">
      <div className="container flex max-w-4xl flex-wrap items-center gap-8">
        <div className="">
          <h2 className="text-3xl">Our clients</h2>
        </div>
        <div className="flex items-center justify-center border-s md:flex-1">
          {clients?.map((client) => (
            <div
              key={client._id}
              className="basis-1/1 sm:basis-1/2 sm:px-4 md:basis-1/3 md:px-6"
            >
              <div className="group/card grid items-center gap-6">
                <Link
                  href={"/clients/" + client?._id}
                  className="bg-muted relative aspect-[2/1] w-full cursor-pointer overflow-hidden"
                >
                  {/* <img
                    src={client?.image}
                    alt={client?.name}
                    className="size-full object-contain object-center"
                  /> */}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
