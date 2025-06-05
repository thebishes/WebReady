interface GalleryItemProps {
  image: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
}

const GalleryItem = ({
  image,
  title,
  description,
  category,
  tags,
}: GalleryItemProps) => {
  return (
    <div className="gallery-item" data-category={category}>
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group relative border border-gray-100 hover:border-primary/20">
        <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
        
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Category tag on image */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-md text-sm font-medium text-primary z-20">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </div>
        </div>
        
        <div className="p-6 relative z-20">
          <h3 className="text-xl font-semibold font-poppins mb-2 relative inline-block">
            {title}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm transition-colors duration-300 hover:bg-primary/10 hover:text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Overlay view button 
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
          <button className="bg-white/90 backdrop-blur-sm text-primary font-medium px-6 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            View Project
          </button>
        </div>*/}
      </div>
    </div>
  );
};

export default GalleryItem;
