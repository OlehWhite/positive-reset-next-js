import { FC } from "react";

interface Props {
  counselor: object;
}

export const PersonalCard: FC = ({ counselor }: Props) => {
  console.log(counselor);
  // const [counselorsImg, setCounselorsImg] = useState<any>({});

  // useEffect(() => {
  //   if (counselors.length > 0) {
  //     counselors.map((item) => {
  //       axios
  //         .get(
  //           `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/assets/${item.fields.img.sys.id}?access_token=${PRIVATE_DATA.accessId}`,
  //         )
  //         .then((response) => {
  //           setCounselorsImg((prevData) => [
  //             ...prevData,
  //             response.data.fields.file.url,
  //           ]);
  //         })
  //         .catch((error) => {
  //           console.error("Error fetching posts:", error);
  //         });
  //     });
  //   }
  // }, [counselors]);

  console.log(counselor);
  return <></>;
};

export default PersonalCard;
