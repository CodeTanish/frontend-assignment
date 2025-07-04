import Image from "next/image";

export default function () {
  const url =
    "https://jobs-dashboard-psi.vercel.app/_next/image?url=%2Fnav-images%2Fprofile.png&w=32&q=75";

  return (
    <div className="fixed top-0 left-0 w-full bg-white flex flex-row items-center justify-between h-[65] shadow-md">
      <div className="left ml-10 text-[16px] font-semibold">Oneflient</div>
      <div className="right flex flex-row items-center justify-evenly text-center">
        <div className="flex flex-row items-center gap-2 text-center">
          <div className="h-[24] w-[20] ">
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10vyf6v"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="SearchIcon"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"></path>
            </svg>
          </div>
          <input className="w-[177 mr-[25]" type="text" name="" id="" placeholder="start searching" />
        </div>
        <div className="flex flex-row mr-10">
          <ul className="flex flex-row gap-6">
            <li className="h-[24] w-[20]">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10vyf6v"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="NotificationsNoneOutlinedIcon"
              >
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z"></path>
              </svg>
            </li>
            <li className="h-[24] w-[20]">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10vyf6v"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="SettingsOutlinedIcon"
              >
                <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1q-.09-.03-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1q.09.03.18.03c.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64zm-1.98-1.71c.04.31.05.52.05.73s-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"></path>
              </svg>
            </li>
            <li className="h-[24] w-[20]">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10vyf6v"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="AppsOutlinedIcon"
              >
                <path d="M4 8h4V4H4zm6 12h4v-4h-4zm-6 0h4v-4H4zm0-6h4v-4H4zm6 0h4v-4h-4zm6-10v4h4V4zm-6 4h4V4h-4zm6 6h4v-4h-4zm0 6h4v-4h-4z"></path>
              </svg>
            </li>
          </ul>
          <Image className="ml-[30]" src={url} alt=""  width={32} height={32}/>
        </div>
      </div>
    </div>
  );
}
