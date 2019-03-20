<template>
    <div id="dashboard">

        <div>
            <label for="MakeNote">Make Note</label>
            <router-link to='/NewTeacher' id="NewTeacher" class="btn-floating btn-large red">
                <i class="fa fa-plus"></i>
            </router-link>
        </div>

    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'dashboard',
    data() {
        return {
            teachers: [],
            students: []
        }
    },
    created () {
        db.collection('teachers').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'employee_id': doc.data().employee_id,
                    'name': doc.data().name,
                    'college': doc.data().college,
                    'language': doc.data().language
                }
                this.teachers.push(data)
            })
        }),
        db.collection('students').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'student_id': doc.data().student_id,
                    'name': doc.data().name,
                    'grade': doc.data().grade,
                    'language': doc.data().language
                }
                this.students.push(data)
            })
        })
    },
}
</script>
