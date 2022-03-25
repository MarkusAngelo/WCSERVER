<!--Profile - Objective, Name, Course, Specialization, etc.-->

<template>
        <div id="profile">
            <div id="pic">
                <img src="../assets/pic.jpg">
            </div>
            <div id="desc">
                <h1 class="header">{{ msg1 }}</h1>
                <h3><i>Bachelor of Science in Information Technology-with Area of Specialization in Web Development</i></h3>
                <p>I.T. graduate seeking to be of assistance to a reputable company, provide a stellar experience with clients, and help in the efficiency and progress of the company. Take advantage of the opportunities handed with openness and competence, exert effort and creativity to the output based on the extent of my abilities, remain grounded and level-minded towards challenges that come, and work and collaborate with others in order to succeed in meeting the goal.</p>
                <hr />
                    <div id="contact">
                        &nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;#1 Holy Angel St, Angeles, 2009 Pampanga &nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp; 09123456789 &nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp; mtlaus@student.hau.edu.ph&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;
                    </div>
                <hr />
            </div>
        </div>
</template>

<script>
    export default {
        name: 'profile',
        data () {
            return {
                msg1: 'Mark Laus'
            }
        }
    }
</script>
