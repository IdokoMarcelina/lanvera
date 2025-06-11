import React from 'react';

const Card = ({
  type,
  tag,
  image,
  title,
  saveIcon: SaveIcon,
  company,
  address,
  addressIcon: AddressIcon,
  price,
  footerText1,
  Text1Icon: Text1Icon,
  footerText2,
  Text2Icon: Text2Icon,
  footerText3,
  Text3Icon: Text3Icon,
}) => {
  return (
    <div className="container border-gray-200 border-1 rounded mx-13  shadow-lg mb-10 w-[280px]">
      {/* Image Section */}
      {image && (
        <div className="pic mb-4">
          <img src={image} alt={title || 'Property Image'} className="w-full h-auto rounded" />
        </div>
      )}

      {/* Info Section */}
      <div className="info space-y-2 px-2">
        {/* Title and Save Icon */}
        {title && (
          <div className="flex justify-between items-center">
            <h4 className="text-[#916756] font-semibold">{title}</h4>
            {SaveIcon && <SaveIcon className="text-red-500 text-lg mt-0.5" />}
          </div>
        )}

        {/* Company */}
        {company && <p className="text-sm text-gray-700">{company}</p>}

        {/* Address */}
        {address && (
          <div className="flex items-center gap-1 text-sm text-gray-600">
            {AddressIcon && <AddressIcon />}
            <p>{address}</p>
          </div>
        )}

        {/* Price */}
        {price && <p className="text-lg font-bold text-black">{price}</p>}

        {/* Footer Texts */}
        <div className="mt-4 mb-4 gap-1 flex justify-between text-sm text-gray-600 ">
          {footerText1 && (
            <div className="flex p-2 items-center gap-1 border-gray-200 border-1 rounded-[4px]">
              {Text1Icon && <Text1Icon />}
              <span>{footerText1}</span>
            </div>
          )}
          {footerText2 && (
            <div className=" p-2 flex items-center gap-1 border-gray-200 border-1 rounded-[4px]">
              {Text2Icon && <Text2Icon />}
              <span>{footerText2}</span>
            </div>
          )}
          {footerText3 && (
            <div className="flex p-2 items-center gap-1 border-gray-200 border-1 rounded-[4px]">
              {Text3Icon && <Text3Icon />}
              <span>{footerText3}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
