<template>
    <div class="diff-viewer">
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Kolom</th>
                    <th>Data saat Ini</th>
                    <th>Perubahan diajukan</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{ fieldKey, fieldLabel, visible } in keysLabel" :key="fieldKey" v-if="visible"
                    :style="originalData[fieldKey] != proposedData[fieldKey] ? 'background-color: #89f7a8' : ''">
                    <td>{{ fieldLabel }}</td>
                    <td :colspan="originalData[fieldKey] == proposedData[fieldKey] ? 2 : 1">{{ originalData[fieldKey] ??
                        'N/A' }}</td>
                    <td v-if="originalData[fieldKey] != proposedData[fieldKey]">{{ proposedData[fieldKey] ?? 'N/A' }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'DiffViewer',
    props: {
        keysLabel: {
            type: Array,
            default: [],
        },
        originalData: {
            type: Object,
            default: () => ({}),
        },
        proposedData: {
            type: Object,
            default: () => ({}),
        },
    },
};
</script>