<!--Education - Elementary, JHS/SHS, College-->

<template>
         <div id="education">
            <div id="desc">
                <h1 class="header">{{ msg2 }}</h1>
                <hr/>
                <div class="school">
                    <strong>Holy Angel University, 2020-2024</strong> <br />
                    <ul>
                        <li>&bull; Bachelor of Science in Information Technology</li><br/>
                        <li>&bull; Diploma Expected 2024</li><br/>
                        <li>&bull; <em>Dean's Lister</em>, April 2021</li><br/>
                        <li>&bull; <em>President's Lister</em>, November 2021</li>
                    </ul>
                    <strong>Holy Angel University, 2014-2020</strong> <br />
                    <ul>
                        <li>&bull; Diploma for High Honors in Senior High School</li><br/>
                        <li>&bull; Diploma for Honors in Junior High School</li><br/>
                        <li>&bull; Honors: S.Y. 2018-2019</li><br/>
                        <li>&bull; Honors: S.Y. 2019-2020</li><br/>
                    </ul>
                    <strong>Holy Angel University, 2008-2014</strong><br />
                    <ul>
                        <li>&bull; Diploma for With Distinction in completion of Elementary Course</li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'education',
        data () {
            return {
                msg2: 'Educational Background'
            }
        }
    }
</script>
