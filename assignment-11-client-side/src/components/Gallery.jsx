
const Gallery = () => {

    return (
<div>
      <h2 className="text-center font-bold text-3xl md:text-5xl my-6">
        <span className="text-[#2994EB]">Photo Gallery</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-12 rounded-xl">
        <img
          src="https://i.ibb.co/wgXXpVD/blog-02-800x533.jpg"
          alt="categoryName"
          className="rounded-xl w-full h-56 hover:-translate-y-3 hover:cursor-pointer shadow-md"
        />

        <img
          src="https://i.ibb.co/BL8rbbt/window-cleaning-services.jpg"
          alt="categoryName"
          className="rounded-xl w-full h-56 hover:-translate-y-3 hover:cursor-pointer shadow-md"
        />

        <img
          src="https://i.ibb.co/0y3JvKq/house-cleaning-service.jpg"
          alt="categoryName"
          className="rounded-xl w-full h-56 hover:-translate-y-3 hover:cursor-pointer shadow-md"
        />

        <img src="https://i.ibb.co/Q8KVYnR/deep-cleaning-services.webp" alt="categoryName" className="rounded-xl w-full h-56 hover:-translate-y-3 hover:cursor-pointer" />

        <img
          src="https://i.ibb.co/DktYknc/marble-contractor-company.jpg"
          alt="categoryName"
          className="rounded-xl w-full h-56 hover:-translate-y-3 hover:cursor-pointer shadow-md"
        />

        <img
          src="https://i.ibb.co/qkbT2jp/deep-cleaning-services.jpg"
          alt="categoryName"
          className="rounded-xl w-full h-56 hover:-translate-y-3 hover:cursor-pointer shadow-md"
        />

        <img
          src="https://i.ibb.co/RcHLDSw/Commercial-Carpet-Cleaning-Mistakes.jpg"
          alt="categoryName"
          className="rounded-xl w-full h-56 hover:-translate-y-3 hover:cursor-pointer shadow-md"
        />

        <img
          src="https://i.ibb.co/SVq3zXL/deep-cleaning-service-provider-500x500.webp"
          alt="categoryName"
          className="rounded-xl w-full h-56 hover:-translate-y-3 hover:cursor-pointer shadow-md"
        />
        <img
          src="https://i.ibb.co/QffZTqg/residential-cleaning-service.jpg"
          alt="categoryName"
          className="rounded-xl w-full h-56 hover:-translate-y-3 hover:cursor-pointer shadow-md"
        />
        <img
          src="https://i.ibb.co/DDCCgrG/washroom-cleaning.jpg"
          alt="categoryName"
          className="rounded-xl w-full h-56 hover:-translate-y-3 hover:cursor-pointer shadow-md"
        />
        <img
          src="https://i.ibb.co/ZGX1yQw/Blue-Coast-Cleaning-Service-banner.jpg"
          alt="categoryName"
          className="rounded-xl w-full h-56 hover:-translate-y-3 hover:cursor-pointer shadow-md"
        />
        <img
          src="https://i.ibb.co/b3MwvYb/Curtain-Cleaning.jpg"
          alt="categoryName"
          className="rounded-xl w-full h-56 hover:-translate-y-3 hover:cursor-pointer shadow-md"
        />
      </div>
    </div>
  );
};

export default Gallery;