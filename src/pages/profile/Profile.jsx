import ProfileHead from "./ProfileHeader";
import ProfileMainSection from "./ProfileMainSection";
export function loader({ params }) {
  const { username } = params;
  return null;
}

export default function Profile() {
  return (
    <div className="h-full border border-transparent">
      <ProfileHead />
      <ProfileMainSection />
    </div>
  );
}
