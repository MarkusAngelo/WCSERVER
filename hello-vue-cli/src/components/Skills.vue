<!--Skill - Training, Seminars, Technologies, Programming Languages -->

<template>
        <div id="skills">
            <div id="desc">
                <h1 class="header">{{ msg3 }}</h1>
                <hr />
                <h2>CISCO Networking Academy</h2>
                <ul>
                    <li>&bull; Trained and undertook the lessons and tasks under the company</li>
                    <li>&bull; Utilized resources regarding the discussion of the Internet-of-Things (IoT) and things alike</li>
                    <li>&bull; Study the Basics and Fundamentals of the Internet-of-Things</li>
                </ul>
                <h2>National Certificate II</h2>
                <ul>
                    <li>&bull; Participate in Workplace Communication</li><br/>
                    <li>&bull; Practice Career Professionalism</li><br/>
                    <li>&bull; Perform Computer Operations</li><br/>
                    <li>&bull; Provide Effective Customer Service</li>
                </ul>
                <h1 class="header">{{ msg4 }}</h1>
                <hr />
                <h2>Java</h2>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h2>Python</h2>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h2>HyperText Mark-up Language</h2>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 95%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h2>Cascading StyleSheet</h2>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 85%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h2>Linux</h2>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 60%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h2>JavaScript</h2>
                <div class="progress">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h2>PHP: Hypertext Preprocessor</h2>
                <div class="progress">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 80%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h2>Structured Query Language</h2>
                <div class="progress">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 82%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'skills',
        data () {
            return {
                msg3: 'Training & Seminars',
                msg4: 'Technologies & Programming Languages'
            }
        }
    }
</script>
