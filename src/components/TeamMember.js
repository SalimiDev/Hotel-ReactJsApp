import React from 'react';
import styles from '../styles/layout/TeamMember.module.scss';
//Members Data
import { teamMemberData } from '../data/teamMemberData';
//Icons
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagramSquare } from 'react-icons/fa';

const TeamMember = () => {
    return (
        <section className={styles.teamMember}>
            <div className={styles.heading}>
                <h2>TEAM MEMBER</h2>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
            </div>
            <div className={styles.team}>
                {teamMemberData.map(member => (
                    <div className={styles.member} key={member.id}>
                        <a href='/#'>
                            <img src={member.picture} alt={member.fullName} />
                        </a>
                        <div>
                            <h2>{member.fullName}</h2>
                            <p className={styles.position}>{member.position}</p>
                        </div>
                        <p>{member.aboutMe}</p>
                        <div className={styles.social_container}>
                            {member.social?.linkedin && <a href={member.social?.linkedin} target='blank'><span><FaLinkedinIn /></span></a>}
                            {member.social?.github && <a href={member.social?.github}><FaGithub/></a>}
                            {member.social?.twitter &&  <a href={member.social?.twitter}><FaTwitter /></a>}
                            {member.social?.instagram &&  <a href={member.social?.instagram}><FaInstagramSquare /></a>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamMember;
