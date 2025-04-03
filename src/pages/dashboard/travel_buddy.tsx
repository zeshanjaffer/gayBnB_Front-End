"use client";
import React, { useState } from "react";
import Image from "next/image";
import { XMarkIcon } from '@heroicons/react/24/outline';

interface BuddyRequest {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

interface PeopleYouMayKnow {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

const TravelBuddy = () => {
  const buddyRequestsData: BuddyRequest[] = [
    { id: 1, name: "Jerome Bell", email: "jermoebell@gmail.com", avatar: "/icons/travel_buddy_avatar1.svg" },
    { id: 2, name: "Helen Meyas", email: "nouenmeyes@gmail.com", avatar: "/icons/travel_buddy_avatar1.svg" },
    { id: 3, name: "West Prakash", email: "westprakash@gmail.com", avatar: "/icons/travel_buddy_avatar1.svg" },
    { id: 4, name: "Dr. Jerome Bell", email: "...", avatar: "/icons/travel_buddy_avatar1.svg" },
    { id: 5, name: "Another Request", email: "another@example.com", avatar: "/icons/travel_buddy_avatar1.svg" },
    { id: 6, name: "More Request", email: "more@example.com", avatar: "/icons/travel_buddy_avatar1.svg" },
    { id: 7, name: "Last Request", email: "last@example.com", avatar: "/icons/travel_buddy_avatar1.svg" },
    { id: 8, name: "Eighth Request", email: "eighth@example.com", avatar: "/icons/travel_buddy_avatar1.svg" },
    { id: 9, name: "Ninth Request", email: "ninth@example.com", avatar: "/icons/travel_buddy_avatar1.svg" },
  ];

  const peopleYouMayKnowData: PeopleYouMayKnow[] = [
    { id: 10, name: "Bukar Awezan", email: "bukswe.niligmak.com", avatar: "/icons/travel_buddy_avatar1.svg" },
    { id: 11, name: "Kernal Ferak", email: "kernatfemsk1236gmall.com", avatar: "/icons/travel_buddy_avatar1.svg" },
    { id: 12, name: "Ailam Bazeer", email: "alambazeer123@gmail.com", avatar: "/icons/travel_buddy_avatar1.svg"},
    { id: 13, name: "Helen Mask", email: "helenmask123gmall.core", avatar: "/icons/travel_buddy_avatar1.svg" },
    { id: 14, name: "Rejbar Belt", email: "rejbarbelt123@gmail.com", avatar:"/icons/travel_buddy_avatar1.svg" },
    { id: 15, name: "Sowess Mukarj", email: "sowessmukarj@gmail.com", avatar: "/icons/travel_buddy_avatar1.svg" },
    { id: 16, name: "Billian Burak", email: "billianburakt@gmail.com", avatar: "/icons/travel_buddy_avatar1.svg" },
    { id: 17, name: "West Praken", email: "jermoebell@gmail.com", avatar: "/icons/travel_buddy_avatar1.svg" },
    { id: 18, name: "Another Person", email: "another@person.com", avatar: "/icons/travel_buddy_avatar1.svg" },
    { id: 19, name: "More Person", email: "more@person.com", avatar: "/icons/travel_buddy_avatar1.svg" },
  ];

  const [showAllBuddyRequests, setShowAllBuddyRequests] = useState(false);
  const [showAllPeopleYouMayKnow, setShowAllPeopleYouMayKnow] = useState(false);

  const RemoveButton = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
    <button className={`absolute ${size === 'sm' ? 'top-[-10px] right-[-10px] w-[40px] h-[40px]' : 'top-[-27px] right-[-27px] w-[55.52px] h-[55.52px]'} rounded-full bg-[#FFE7E7] flex items-center justify-center text-[#E71D36] hover:bg-[#FFCACA] z-10`}>
      <XMarkIcon className={`${size === 'sm' ? 'h-4 w-4' : 'h-6 w-6'}`} />
    </button>
  );

  // Mobile List Item Component
  const MobileListItem = ({ 
    item, 
    type 
  }: { 
    item: BuddyRequest | PeopleYouMayKnow, 
    type: 'request' | 'person' 
  }) => (
    <div className="w-full bg-white rounded-[12px] border border-[#EAECF0] p-4 mb-3 relative">
      <RemoveButton size="sm" />
      <div className="flex items-center">
        <div className="relative w-[48px] h-[48px] rounded-full overflow-hidden mr-3">
          <Image src={item.avatar} alt={item.name} layout="fill" objectFit="cover" />
        </div>
        <div className="flex-1">
          <h3 className="font-nunito font-semibold text-[16px] text-[#2A282F]">
            {item.name}
          </h3>
          <p className="font-nunito text-[14px] text-[#A8A6AC]">
            {item.email}
          </p>
        </div>
      </div>
      <button className="w-full mt-3 py-2 rounded-[8px] bg-white border border-[#EAECF0]">
        <span className="font-nunito font-bold text-[14px] bg-[radial-gradient(89.6%_68.47%_at_0%_0.99%,_#B88AE1_0%,_#774C9E_100%)] bg-clip-text text-transparent">
          {type === 'request' ? 'Confirm' : 'Add Buddy'}
        </span>
      </button>
    </div>
  );

  // Card Component (used for tablet and desktop)
  const CardComponent = ({ item, type }: { item: BuddyRequest | PeopleYouMayKnow, type: 'request' | 'person' }) => (
    <div className={`w-full h-[212px] ${
      type === 'request' 
        ? 'bg-[radial-gradient(89.6%_68.47%_at_0%_0.99%,_rgba(184,138,225,0.05)_0%,_rgba(119,76,158,0.05)_100%)]' 
        : 'bg-[#F9FAFB]'
    } rounded-[12px] border border-[#EAECF0] p-[16px] flex flex-col gap-[24px] relative`}>
      <RemoveButton />
      <div className="w-full h-[180px] flex flex-col gap-[24px] items-center">
        <div className="relative w-[64px] h-[64px] rounded-full overflow-hidden">
          <Image src={item.avatar} alt={item.name} layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col items-center gap-y-1 w-full px-2">
          <h3 className="font-nunito font-semibold text-[16px] leading-[100%] tracking-[-0.04em] text-center text-[#2A282F] whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
            {item.name}
          </h3>
          <p className="font-nunito font-normal text-[14px] leading-[100%] tracking-[-0.04em] text-center text-[#A8A6AC] whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
            {item.email}
          </p>
        </div>
        <button className="w-full max-w-[208px] h-[40px] rounded-[8px] p-[12px] flex items-center justify-center gap-[4px] bg-white border border-[#EAECF0]">
          <span className="font-nunito font-bold text-[14px] leading-[20px] tracking-[0%] text-center bg-[radial-gradient(89.6%_68.47%_at_0%_0.99%,_#B88AE1_0%,_#774C9E_100%)] bg-clip-text text-transparent">
            {type === 'request' ? 'Confirm' : 'Add Buddy'}
          </span>
        </button>
      </div>
    </div>
  );

  const visibleBuddyRequests = showAllBuddyRequests ? buddyRequestsData : buddyRequestsData.slice(0, 8);
  const visiblePeopleYouMayKnow = showAllPeopleYouMayKnow ? peopleYouMayKnowData : peopleYouMayKnowData.slice(0, 8);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F9FAFB] p-4 sm:p-6">
      <div className="bg-white shadow-card rounded-xl flex flex-col w-full max-w-[1033px] relative gap-y-[24px] md:gap-y-[31px] p-[20px] sm:p-[24px] md:p-[31px] mt-[80px] sm:mt-[100px] md:mt-[120px]">
        {/* Buddy Requests Section */}
        <section className="mb-0">
          <h2 className="font-montserrat font-semibold text-[22px] sm:text-[24px] md:text-[26.99px] leading-[100%] tracking-[0%] text-[#222222] mb-[14px] sm:mb-[18px]">
            Buddy requests
          </h2>
          
          {/* Mobile List View (phones) */}
          <div className="block sm:hidden space-y-3">
            {visibleBuddyRequests.map((request) => (
              <MobileListItem key={request.id} item={request} type="request" />
            ))}
          </div>
          
          {/* Tablet View (2 cols) */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:hidden gap-[16px] md:gap-[20px]">
            {visibleBuddyRequests.map((request) => (
              <CardComponent key={request.id} item={request} type="request" />
            ))}
          </div>
          
          {/* Desktop View (3-4 cols) */}
          <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-[20px] xl:gap-[32px]">
            {visibleBuddyRequests.map((request) => (
              <CardComponent key={request.id} item={request} type="request" />
            ))}
          </div>
          
          {buddyRequestsData.length > 8 && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowAllBuddyRequests(!showAllBuddyRequests)}
                className="w-full max-w-[208px] h-[40px] rounded-[8px] p-[12px] flex items-center justify-center gap-[4px] bg-white border border-[#EAECF0] hover:bg-gray-50 transition-colors"
              >
                <span className="font-nunito font-bold text-[14px] leading-[20px] tracking-[0%] text-center bg-[radial-gradient(89.6%_68.47%_at_0%_0.99%,_#B88AE1_0%,_#774C9E_100%)] bg-clip-text text-transparent">
                  {showAllBuddyRequests ? "See Less" : "See More"}
                </span>
              </button>
            </div>
          )}
        </section>

        {/* People You May Know Section */}
        <section>
          <h2 className="font-montserrat font-semibold text-[22px] sm:text-[24px] md:text-[26.99px] leading-[100%] tracking-[0%] text-[#222222] mb-[14px] sm:mb-[18px]">
            People you may know
          </h2>
          
          {/* Mobile List View (phones) */}
          <div className="block sm:hidden space-y-3">
            {visiblePeopleYouMayKnow.map((person) => (
              <MobileListItem key={person.id} item={person} type="person" />
            ))}
          </div>
          
          {/* Tablet View (2 cols) */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:hidden gap-[16px] md:gap-[20px]">
            {visiblePeopleYouMayKnow.map((person) => (
              <CardComponent key={person.id} item={person} type="person" />
            ))}
          </div>
          
          {/* Desktop View (3-4 cols) */}
          <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-[20px] xl:gap-[32px]">
            {visiblePeopleYouMayKnow.map((person) => (
              <CardComponent key={person.id} item={person} type="person" />
            ))}
          </div>
          
          {peopleYouMayKnowData.length > 8 && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowAllPeopleYouMayKnow(!showAllPeopleYouMayKnow)}
                className="w-full max-w-[208px] h-[40px] rounded-[8px] p-[12px] flex items-center justify-center gap-[4px] bg-white border border-[#EAECF0] hover:bg-gray-50 transition-colors"
              >
                <span className="font-nunito font-bold text-[14px] leading-[20px] tracking-[0%] text-center bg-[radial-gradient(89.6%_68.47%_at_0%_0.99%,_#B88AE1_0%,_#774C9E_100%)] bg-clip-text text-transparent">
                  {showAllPeopleYouMayKnow ? "See Less" : "See More"}
                </span>
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default TravelBuddy;