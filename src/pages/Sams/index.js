import React from "react";

import { Column, Row, Image, Text, Stack } from "components";

const SamsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-circularstd items-start justify-start mx-[auto] lg:pb-[35px] xl:pb-[40px] 2xl:pb-[45px] 3xl:pb-[55px] pb-[71.2px] w-[100%]">
        <Column className="w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-white_A700 items-center justify-between xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] pb-[18.6px] lg:pb-[9px] 3xl:pl-[109px] pl-[141.05px] lg:pl-[70px] xl:pl-[80px] 2xl:pl-[91px] 2xl:pr-[100px] 3xl:pr-[120px] pr-[156px] lg:pr-[78px] xl:pr-[89px] lg:pt-[11px] xl:pt-[13px] 2xl:pt-[15px] 3xl:pt-[18px] pt-[23.25px] w-[100%]">
              <Image
                src={"images/img_saminuwebsite.png"}
                className="h-[119.35px] lg:h-[60px] xl:h-[69px] 2xl:h-[78px] 3xl:h-[93px] mb-[0] object-contain w-[119.35px] lg:w-[59px] xl:w-[68px] 2xl:w-[77px] 3xl:w-[92px]"
                alt="saminuwebsite"
              />
              <Row className="items-start justify-center lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[21px] mb-[27.65px] 3xl:ml-[1127px] ml-[1455.45px] lg:ml-[730px] xl:ml-[835px] 2xl:ml-[939px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] mt-[21.7px] w-[16%]">
                <Text className="cursor-pointer hover:font-medium font-medium lg:leading-[35px] xl:leading-[40px] 2xl:leading-[45px] 3xl:leading-[54px] leading-[69.75px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-[24.799999237060547px] text-bluegray_900 text-left w-[19%]">{`Home`}</Text>
                <div className="bg-amber_700 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] h-[9.3px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] mb-[28.15px] lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3.85px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[32.55px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px] w-[9.3px]"></div>
                <Text className="cursor-pointer hover:font-medium font-medium lg:leading-[35px] xl:leading-[40px] 2xl:leading-[45px] 3xl:leading-[54px] leading-[69.75px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] ml-[7.75px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-[24.799999237060547px] hover:text-bluegray_900 text-gray_400 text-left w-[20%]">{`About`}</Text>
                <div className="bg-amber_700 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] h-[9.3px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] mb-[28.15px] xl:ml-[2px] lg:ml-[2px] 3xl:ml-[3px] 2xl:ml-[3px] ml-[4.95px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[32.55px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px] w-[9.3px]"></div>
                <Text className="cursor-pointer hover:font-medium font-medium lg:leading-[35px] xl:leading-[40px] 2xl:leading-[45px] 3xl:leading-[54px] leading-[69.75px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] ml-[7.75px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-[24.799999237060547px] hover:text-bluegray_900 text-gray_400 text-left w-[17%]">{`Work`}</Text>
                <div className="bg-amber_700 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] h-[9.3px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] mb-[28.15px] xl:ml-[3px] lg:ml-[3px] 3xl:ml-[4px] 2xl:ml-[4px] ml-[6.2px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[32.55px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px] w-[9.3px]"></div>
                <Text className="cursor-pointer hover:font-medium font-medium lg:leading-[35px] xl:leading-[40px] 2xl:leading-[45px] 3xl:leading-[54px] leading-[69.75px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] ml-[7.75px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-[24.799999237060547px] hover:text-bluegray_900 text-gray_400 text-left w-[26%]">{`Contact`}</Text>
              </Row>
            </Row>
          </header>
          <Row className="items-start justify-start lg:mt-[174px] xl:mt-[199px] 2xl:mt-[224px] 3xl:mt-[268px] mt-[347.2px] 3xl:pl-[115px] pl-[148.8px] lg:pl-[74px] xl:pl-[85px] 2xl:pl-[96px] 2xl:pr-[102px] 3xl:pr-[122px] pr-[158.1px] lg:pr-[79px] xl:pr-[90px] w-[100%]">
            <Column className="items-start justify-start w-[47%]">
              <Column className="font-andersongrotesk w-[100%]">
                <Stack className="lg:h-[232px] xl:h-[266px] 2xl:h-[299px] 3xl:h-[358px] h-[462.00003px] w-[100%]">
                  <Text className="absolute font-bold inset-[0] leading-[175.45%] 3xl:text-[102px] text-[131.75px] lg:text-[66px] xl:text-[75px] 2xl:text-[85px] text-gray_900 text-left w-[100%]">
                    <span className="text-gray_900 font-circularstd font-medium">
                      <>{` Design `}</>
                    </span>
                    <span className="text-gray_900 font-circularstd font-medium">
                      <>{`plus `}</>
                    </span>
                    <span className="text-amber_700 font-circularstd font-medium">
                      <>{`{Code} `}</>
                    </span>
                    <span className="text-gray_900 font-circularstd font-medium">
                      <>{`=`}</>
                    </span>
                    <span className="text-amber_700 font-circularstd font-medium">
                      <>{` `}</>
                    </span>
                    <span className="text-gray_900 font-circularstd font-medium">
                      <>{`Saminu`}</>
                    </span>
                  </Text>
                  <Stack className="absolute lg:h-[116px] xl:h-[133px] 2xl:h-[149px] 3xl:h-[179px] h-[230.75px] left-[1%] top-[2%] w-[45%]">
                    <Image
                      src={"images/img_group2.svg"}
                      className="absolute lg:h-[107px] xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] h-[212.35px] inset-x-[0] mx-[auto] object-contain top-[0] w-[97%]"
                      alt="Group2"
                    />
                    <Image
                      src={"images/img_pngitem1471517.png"}
                      className="absolute bottom-[0] lg:h-[17px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[26px] h-[32.35px] object-contain right-[0] w-[7%]"
                      alt="PngItem1471517"
                    />
                  </Stack>
                </Stack>
              </Column>
              <Text className="font-circularstd font-medium lg:leading-[35px] xl:leading-[40px] 2xl:leading-[45px] 3xl:leading-[54px] leading-[69.75px] 3xl:ml-[10px] ml-[13.95px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[27.8px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[46.5px] text-bluegray_400 text-left w-[71%]">{`Hello, I’m a frontend and web developer based in Lagos,  Nigeria.`}</Text>
            </Column>
            <Row className="bg-amber_700_33 items-start justify-center lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[23.75px] ml-[113.15px] lg:ml-[56px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] lg:mt-[206px] xl:mt-[236px] 2xl:mt-[266px] 3xl:mt-[319px] mt-[412.3px] lg:pb-[20px] xl:pb-[22px] 2xl:pb-[25px] 3xl:pb-[31px] pb-[40.04px] lg:pl-[23px] xl:pl-[26px] 2xl:pl-[30px] 3xl:pl-[36px] pl-[46.5px] lg:pr-[39px] xl:pr-[45px] 2xl:pr-[51px] 3xl:pr-[61px] pr-[79px] lg:pt-[13px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] pt-[26.35px] rounded-radius1085 w-[34%]">
              <Column className="bg-white_A700 h-[124px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center justify-start mb-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] mt-[3.1px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] p-[7.75px] rounded-radius50 w-[124px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                <Image
                  src={"images/img_pexelsnappy93.png"}
                  className="h-[108.5px] lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] mx-[auto] object-contain rounded-radius50 w-[auto]"
                  alt="pexelsnappy93"
                />
              </Column>
              <Column className="items-start justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[37.2px] my-[0] w-[39%]">
                <Text className="font-medium lg:leading-[35px] xl:leading-[40px] 2xl:leading-[45px] 3xl:leading-[54px] leading-[69.75px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[27.899999618530273px] text-bluegray_900 text-left w-[62%]">{`Saminu Eedris`}</Text>
                <Column className="w-[100%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Text className="font-medium lg:leading-[35px] xl:leading-[40px] 2xl:leading-[45px] 3xl:leading-[54px] leading-[69.75px] mb-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] mt-[3.15px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-[31px] text-amber_700 text-left w-[35%]">{`Twitter`}</Text>
                    <Text className="font-medium lg:leading-[35px] xl:leading-[40px] 2xl:leading-[45px] 3xl:leading-[54px] leading-[69.75px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[35px] ml-[45.25px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-[31px] text-amber_700 text-left w-[49%]">{`Instagram`}</Text>
                  </Row>
                </Column>
              </Column>
              <Text className="font-medium lg:leading-[35px] xl:leading-[40px] 2xl:leading-[45px] 3xl:leading-[54px] leading-[69.75px] mb-[1px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[38.35px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] mt-[57.35px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-[31px] text-amber_700 text-left w-[18%]">{`Facebook`}</Text>
            </Row>
          </Row>
          <Row className="bg-gray_900 items-start justify-between lg:mt-[140px] xl:mt-[160px] 2xl:mt-[180px] 3xl:mt-[216px] mt-[280.05px] pb-[124.05px] lg:pb-[62px] xl:pb-[71px] 2xl:pb-[80px] 3xl:pb-[96px] 2xl:pl-[105px] 3xl:pl-[126px] pl-[162.75px] lg:pl-[81px] xl:pl-[93px] 3xl:pr-[118px] pr-[153.45px] lg:pr-[77px] xl:pr-[88px] 2xl:pr-[99px] 2xl:pt-[109px] 3xl:pt-[130px] pt-[168.95px] lg:pt-[84px] xl:pt-[96px] w-[100%]">
            <Text className="font-andersongrotesk font-normal lg:leading-[37px] xl:leading-[43px] 2xl:leading-[48px] 3xl:leading-[58px] leading-[75.17px] my-[0] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[46.5px] text-gray_401 text-left w-[39%]">
              <span className="text-gray_401 font-circularstd font-medium">
                <>
                  {`I’m a professional WordPress web developer with over 5 years of experience in WordPress, Front-end Development, UI Design, and Graphics design.`}
                  <br />
                  {``}
                  <br />
                  {`Being a tech enthusiast and an expert in HTML, CSS, and WordPress, I have extensive knowledge in building responsive WordPress websites. I pride myself on delivering the highest-standard results for your `}
                </>
              </span>
              <span className="text-white_A700 font-circularstd font-medium underline">
                <>{`Front-End & WordPress development`}</>
              </span>
              <span className="text-gray_401 font-circularstd font-medium">
                <>{` projects.`}</>
              </span>
            </Text>
            <Text className="font-circularstd font-medium lg:leading-[37px] xl:leading-[43px] 2xl:leading-[48px] 3xl:leading-[58px] leading-[75.17px] lg:mb-[151px] xl:mb-[172px] 2xl:mb-[194px] 3xl:mb-[233px] mb-[301px] xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] ml-[192.2px] lg:ml-[96px] mt-[0] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[46.5px] text-gray_401 text-left w-[39%]">
              {
                <>
                  {`My uniqueness, creativity, incredible work ethic, problem-solving abilities, and perfectionism are what constantly make my work stand out.`}
                  <br />
                  {``}
                  <br />
                  {`In addition, I am an avid learner with a top goal to enrich my skills to provide excellent services to ensure your 100% satisfaction.`}
                </>
              }
            </Text>
          </Row>
        </Column>
        <Column className="font-andersongrotesk items-end overflow-auto w-[100%]">
          <div className="overflow-x-auto w-[100%]">
            <Stack className="3xl:h-[1183px] h-[1526.75px] lg:h-[767px] xl:h-[877px] 2xl:h-[986px] w-[100%]">
              <Row className="absolute inset-[0] items-center justify-evenly w-[100%]">
                <Column className="bg-gray_900 lg:pb-[130px] xl:pb-[148px] 2xl:pb-[167px] 3xl:pb-[201px] pb-[259.5px] pl-[127.1px] lg:pl-[63px] xl:pl-[72px] 2xl:pl-[82px] 3xl:pl-[98px] 2xl:pr-[111px] 3xl:pr-[133px] pr-[172.05px] lg:pr-[86px] xl:pr-[98px] lg:pt-[238px] xl:pt-[273px] 2xl:pt-[307px] 3xl:pt-[368px] pt-[475.85px] w-[39%]">
                  <Text className="font-bold leading-[116.25px] lg:leading-[58px] xl:leading-[66px] 2xl:leading-[75px] 3xl:leading-[90px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] ml-[31px] mr-[0] lg:text-[38px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px] text-[77.5px] text-amber_700 text-left w-[70%]">
                    <span className="text-amber_700 font-circularstd font-medium">
                      <>
                        {`Custom WordPress Development`}
                        <br />
                        {``}
                      </>
                    </span>
                    <span className="text-white_A700 font-circularstd font-medium">
                      <>{`Product Designer Portfolio`}</>
                    </span>
                  </Text>
                  <Row className="font-circularstd items-center justify-start lg:mr-[232px] xl:mr-[265px] 2xl:mr-[298px] 3xl:mr-[358px] mr-[462.6px] xl:mt-[113px] 2xl:mt-[128px] 3xl:mt-[153px] mt-[198.4px] lg:mt-[99px] lg:px-[15px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] px-[31px] rounded-radius775 w-[31%]">
                    <Text className="font-medium leading-[127.87px] lg:leading-[64px] xl:leading-[73px] 2xl:leading-[82px] 3xl:leading-[99px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-[31px] text-amber_700 text-left w-[70%]">{`thisishauwa.com`}</Text>
                    <Image
                      src={"images/img_arrow2.svg"}
                      className="3xl:h-[10px] h-[12.79px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[57.6px] 2xl:ml-[10px] 3xl:ml-[12px] ml-[15.5px] lg:ml-[7px] xl:ml-[8px] mt-[57.61px] lg:my-[28px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[44px] object-contain w-[7%]"
                      alt="Arrow2"
                    />
                  </Row>
                </Column>
                <Stack className="3xl:h-[1183px] h-[1526.75px] lg:h-[767px] xl:h-[877px] 2xl:h-[986px] w-[61%]">
                  <Image
                    src={"images/img_workimage.svg"}
                    className="absolute 3xl:h-[1183px] h-[1526.75px] lg:h-[767px] xl:h-[877px] 2xl:h-[986px] left-[0] object-contain w-[65%]"
                    alt="WorkImage"
                  />
                  <Image
                    src={"images/img_group4.svg"}
                    className="absolute 3xl:h-[1091px] h-[1408.33px] lg:h-[707px] xl:h-[809px] 2xl:h-[910px] inset-x-[0] mx-[auto] object-contain opacity-op2 top-[0] w-[99%]"
                    alt="Group4"
                  />
                </Stack>
              </Row>
              <Stack className="absolute bottom-[5%] h-[1244.28px] lg:h-[625px] xl:h-[715px] 2xl:h-[804px] 3xl:h-[964px] right-[21%] w-[39%]">
                <Stack className="absolute bg-gradient  border-bw155 border-solid border-white_A700 h-[1244.28px] lg:h-[625px] xl:h-[715px] 2xl:h-[804px] 3xl:h-[964px] inset-y-[0] left-[2%] opacity-op79 lg:pb-[14px] xl:pb-[17px] 2xl:pb-[19px] 3xl:pb-[23px] pb-[29.75px] lg:pl-[16px] xl:pl-[18px] 2xl:pl-[20px] 3xl:pl-[25px] pl-[32.48px] lg:pt-[17px] xl:pt-[19px] 2xl:pt-[22px] 3xl:pt-[26px] pt-[34.49px] right-[0] rotate-[12deg] rounded-radius7595 w-[98%]">
                  <Image
                    src={"images/img_rectangle8.png"}
                    className="absolute h-[1180.04px] lg:h-[593px] xl:h-[678px] 2xl:h-[762px] 3xl:h-[915px] inset-[0] justify-center m-[auto] object-contain rounded-radius558 w-[97%]"
                    alt="Rectangle8"
                  />
                </Stack>
                <Image
                  src={"images/img_arrow.svg"}
                  className="absolute bottom-[3%] lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] h-[68.2px] left-[0] object-contain rounded-radius868 w-[auto]"
                  alt="Arrow"
                />
              </Stack>
              <Image
                src={"images/img_arrow_1.svg"}
                className="absolute bottom-[7%] lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] h-[68.2px] left-[36%] object-contain opacity-op5 rotate-[-180deg] rounded-radius868 w-[auto]"
                alt="Arrow"
              />
            </Stack>
          </div>
        </Column>
        <div className="font-circularstd lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] mt-[63.55px] overflow-x-auto w-[100%]">
          <Stack className="3xl:h-[1123px] h-[1448.6299px] lg:h-[727px] xl:h-[832px] 2xl:h-[936px] w-[100%]">
            <Row className="absolute inset-[0] items-start justify-between w-[100%]">
              <Image
                src={"images/img_group5.svg"}
                className="3xl:h-[1091px] h-[1408.33px] lg:h-[707px] xl:h-[809px] 2xl:h-[910px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[40.3px] object-contain opacity-op2 w-[63%]"
                alt="Group5"
              />
              <Stack className="bg-amber_300 lg:h-[200px] xl:h-[228px] 2xl:h-[257px] 3xl:h-[308px] h-[396.8px] mb-[1051.83px] lg:mb-[527px] xl:mb-[603px] 2xl:mb-[679px] 3xl:mb-[814px] lg:ml-[307px] xl:ml-[351px] 2xl:ml-[395px] 3xl:ml-[474px] ml-[612.25px] 3xl:pb-[105px] pb-[135.8px] lg:pb-[68px] xl:pb-[77px] 2xl:pb-[87px] 2xl:pl-[46px] 3xl:pl-[55px] pl-[71.3px] 2xl:pr-[45px] 3xl:pr-[54px] pr-[69.75px] pt-[124px] lg:pt-[62px] xl:pt-[71px] 2xl:pt-[80px] 3xl:pt-[96px] lg:px-[35px] xl:px-[40px] rounded-radius50 lg:w-[199px] xl:w-[227px] 2xl:w-[256px] 3xl:w-[307px] w-[396.8px]">
                <Text className="absolute font-medium h-[max-content] inset-[0] justify-center lg:leading-[35px] xl:leading-[40px] 2xl:leading-[45px] 3xl:leading-[54px] leading-[69.75px] m-[auto] opacity-op5 lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[46.5px] text-gray_900 text-left w-[64%]">
                  <span className="text-gray_900 text-[31px] font-circularstd lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                    <>{`Take a look at my`}</>
                  </span>
                  <span className="text-gray_900 font-circularstd">
                    <>{` `}</>
                  </span>
                  <span className="text-gray_900 text-[54.25px] font-circularstd lg:text-[27px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px]">
                    <>{`resume`}</>
                  </span>
                </Text>
                <Image
                  src={"images/img_arrow5.svg"}
                  className="absolute bottom-[4%] lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] h-[31px] object-contain right-[6%] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px] w-[31px]"
                  alt="Arrow5"
                />
              </Stack>
            </Row>
            <Column className="absolute bg-orange_50 bottom-[8%] items-start justify-start lg:pb-[116px] xl:pb-[133px] 2xl:pb-[149px] 3xl:pb-[179px] pb-[232.05px] 3xl:pt-[106px] pt-[137.95px] lg:pt-[69px] xl:pt-[79px] 2xl:pt-[89px] right-[5%] rounded-radius2325 w-[68%]">
              <Text className="font-medium xl:leading-[100px] 2xl:leading-[112px] 3xl:leading-[135px] leading-[174.38px] lg:leading-[87px] 2xl:ml-[101px] 3xl:ml-[121px] ml-[156.55px] lg:ml-[78px] xl:ml-[89px] text-[116.25px] lg:text-[58px] xl:text-[66px] 2xl:text-[75px] 3xl:text-[90px] text-gray_900 text-left w-[33%]">{`Here’s What I Do`}</Text>
              <Column className="items-center mt-[112.9px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[87px] w-[100%]">
                <Row className="items-center justify-start 2xl:pl-[101px] 3xl:pl-[121px] pl-[156.55px] lg:pl-[78px] xl:pl-[89px] lg:pr-[221px] xl:pr-[253px] 2xl:pr-[285px] 3xl:pr-[342px] pr-[441.75px] w-[100%]">
                  <Text className="font-medium lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-[38.75px] text-amber_700 text-left w-[auto]">{`iCreate`}</Text>
                  <Text className="font-medium lg:ml-[203px] xl:ml-[232px] 2xl:ml-[261px] 3xl:ml-[313px] ml-[405.3px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-[38.75px] text-amber_700 text-left w-[auto]">{`iBetter`}</Text>
                  <Text className="font-medium lg:ml-[222px] xl:ml-[254px] 2xl:ml-[286px] 3xl:ml-[344px] ml-[444.2px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-[38.75px] text-amber_700 text-left w-[auto]">{`iConvert`}</Text>
                </Row>
                <Row className="lg:gap-[253px] xl:gap-[290px] 2xl:gap-[326px] 3xl:gap-[391px] gap-[505.29993px] grid grid-cols-3 items-center justify-start lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] mt-[20.24px] w-[100%]">
                  <Image
                    src={"images/img_arrow2_1.svg"}
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] h-[31px] object-contain lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px] w-[31px]"
                    alt="Arrow2"
                  />
                  <Image
                    src={"images/img_arrow3.svg"}
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] h-[31px] object-contain lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px] w-[31px]"
                    alt="Arrow3"
                  />
                  <Image
                    src={"images/img_arrow4.svg"}
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] h-[31px] object-contain lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px] w-[31px]"
                    alt="Arrow4"
                  />
                </Row>
                <Row className="items-center justify-end lg:mt-[34px] xl:mt-[39px] 2xl:mt-[43px] 3xl:mt-[52px] mt-[68.01px] 2xl:pl-[101px] 3xl:pl-[121px] pl-[156.55px] lg:pl-[78px] xl:pl-[89px] pr-[127.1px] lg:pr-[63px] xl:pr-[72px] 2xl:pr-[82px] 3xl:pr-[98px] w-[100%]">
                  <Text className="font-medium lg:leading-[21px] xl:leading-[24px] 2xl:leading-[27px] 3xl:leading-[32px] leading-[41.85px] mb-[1px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[27.899999618530273px] text-bluegray_901 text-left w-[25%]">{`I can help you create a WordPress website from scratch, including eCommerce websites`}</Text>
                  <Text className="font-medium lg:leading-[21px] xl:leading-[24px] 2xl:leading-[27px] 3xl:leading-[32px] leading-[41.85px] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] ml-[66.65px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[27.899999618530273px] text-bluegray_901 text-left w-[25%]">{`I can help you optimize your existing WordPress website, as well as install and configure plugins`}</Text>
                  <Text className="font-medium lg:leading-[21px] xl:leading-[24px] 2xl:leading-[27px] 3xl:leading-[32px] leading-[41.85px] lg:ml-[47px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] ml-[94.55px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[27.899999618530273px] text-bluegray_901 text-left w-[25%]">{`I can convert your UI designs from Figma, Elementor, XD, and Zeplin to HTML or WordPress`}</Text>
                </Row>
              </Column>
            </Column>
          </Stack>
        </div>
        <Column className="font-circularstd items-center lg:mt-[44px] xl:mt-[51px] 2xl:mt-[57px] 3xl:mt-[68px] mt-[88.97px] w-[100%]">
          <Row className="items-center justify-between 2xl:px-[102px] 3xl:px-[122px] px-[158.1px] lg:px-[79px] xl:px-[90px] w-[100%]">
            <Text className="font-medium 3xl:leading-[108px] leading-[139.50px] lg:leading-[70px] xl:leading-[80px] 2xl:leading-[90px] lg:text-[46px] xl:text-[53px] 2xl:text-[60px] 3xl:text-[72px] text-[93px] text-gray_900 text-left w-[27%]">{`Ready To Make Magic?`}</Text>
            <Column className="items-start lg:mb-[10px] xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[15px] mb-[20.05px] lg:ml-[283px] xl:ml-[324px] 2xl:ml-[365px] 3xl:ml-[438px] ml-[565.75px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[26.35px] w-[34%]">
              <Column className="items-center w-[100%]">
                <Stack className="2xl:h-[101px] 3xl:h-[121px] h-[155.5px] lg:h-[79px] xl:h-[90px] w-[100%]">
                  <div className="absolute bg-amber_600 h-[108.5px] lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] opacity-op5 right-[1%] rounded-radius50 top-[0] w-[108.5px] lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"></div>
                  <Text className="absolute bottom-[0] font-medium inset-x-[0] lg:leading-[35px] xl:leading-[40px] 2xl:leading-[45px] 3xl:leading-[54px] leading-[69.75px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[46.5px] text-bluegray_901 text-left w-[100%]">{`Shoot me an email. We could talk over coffee maybe?`}</Text>
                </Stack>
              </Column>
              <Text className="font-medium xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[14px] mt-[18.1px] lg:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-[31px] text-amber_700 text-left w-[auto]">{`saminu@gmail.com`}</Text>
            </Column>
          </Row>
          <Row className="items-center justify-between mt-[110.05px] lg:mt-[55px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] 2xl:pl-[102px] 3xl:pl-[122px] pl-[158.1px] lg:pl-[79px] 2xl:pr-[101px] 3xl:pr-[121px] pr-[157.35px] lg:pr-[78px] xl:px-[90px] w-[100%]">
            <Text className="font-medium lg:leading-[29px] xl:leading-[33px] 2xl:leading-[37px] 3xl:leading-[45px] leading-[58.13px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-[21.69999885559082px] text-gray_900 text-left w-[8%]">{`All rights reserved`}</Text>
            <Text className="font-medium lg:leading-[29px] xl:leading-[33px] 2xl:leading-[37px] 3xl:leading-[45px] leading-[58.13px] 3xl:ml-[1084px] ml-[1400.55px] lg:ml-[702px] xl:ml-[803px] 2xl:ml-[904px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-[21.69999885559082px] text-gray_900 text-left w-[15%]">
              <span className="text-gray_900 text-[21.7px] font-circularstd lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                <>{`Built by Sam, Designed by `}</>
              </span>
              <span className="text-gray_700 text-[21.7px] font-circularstd lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                <>{`Hauwa`}</>
              </span>
            </Text>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default SamsPage;
